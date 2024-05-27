import GeoLocator from '../../components/GeoLocator/GeoLocator.jsx'
import * as markersService from '../../services/markers.js';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { APIProvider } from '@vis.gl/react-google-maps';
import './newServiceForm.css';

const NewServiceForm = () => {
    const navigator = useNavigate();
    const [addLocation, setAddLocation] = useState(null);
    const [formData, setFormData] = useState({
        company_name: '',
        service: '',
        rating: '',
        availible_time: '',
        coordinates: {},
    });

    const updateCoordinates = (latitude, longitude) => {
        setFormData({
            ...formData,
            ['coordinates']: {lat: latitude, lng: longitude}
        })
        setAddLocation(true);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async(e) => {
        const res = await markersService.createMarker(formData);
        console.log(res);
        navigator('/');
    }

    const { company_name, service, rating, availible_time } = formData;

    const formValidation = () => {
        return !(company_name && service && rating && availible_time && addLocation);
    };

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}>
            <main>
                <h1>Create a service marker!</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="company_name">Company Name: </label>
                    <input type="text" name="company_name" value={company_name} onChange={handleChange} />
                    <label htmlFor="service">Services: </label>
                    <input type="text" name="service" value={service} onChange={handleChange} />
                    <label htmlFor="rating">Rating: </label>
                    <input type="text" name="rating" value={rating} onChange={handleChange} />
                    <label htmlFor="availible_time">Availble Time: </label>
                    <input type="text" name="availible_time" value={availible_time} onChange={handleChange} />
                    <GeoLocator updateCoordinates={updateCoordinates}/>
                    <button onClick={handleSubmit} disabled={formValidation()}>Create Marker</button>
                    <Link to='/'><button>Cancel</button></Link>
                </form>
            </main>
        </APIProvider>
    )
}

export default NewServiceForm;