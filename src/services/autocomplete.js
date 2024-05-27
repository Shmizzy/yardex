const PLACES_URL = 'https://places.googleapis.com/v1/places:autocomplete';
const API_KEY = import.meta.env.VITE_GOOGLE_CLOUD_API_KEY;


const fetchAutocompleteResults = async (input) => {
    try {
        const res = await fetch(PLACES_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': API_KEY,
            },
            body: JSON.stringify({input: input})
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


export { fetchAutocompleteResults }