const BASE_URL = import.meta.env.VITE_BACKEND_URL;


const signUp = async(formData) => {
    try{
        const res = await fetch(BASE_URL + '/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await res.json();
        return data;
    }catch(e){
        console.log(e);
    }
}

export { signUp };