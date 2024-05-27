const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/service`;

const createMarker = async(formData) => {
    try {
        const res = await fetch(BASE_URL + '/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

const fetchAllMarkers = async() => {
    try {
        const res = await fetch(BASE_URL + '/all');
        const data = await res.json();
        return data.allServices;
    } catch (error) {
        console.log(error)
    }
}

const removeMarker = async(id) => {
    try {
        const res = await fetch(BASE_URL + `/${id}/delete`, {
            method: 'DELETE',
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export { createMarker, fetchAllMarkers, removeMarker }