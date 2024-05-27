import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";


const GeoLocator = (props) => {
    const geocodingApiLoaded = useMapsLibrary('geocoding');
    const [geocodingService, setGeocodingService] = useState();
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState(['']);

    useEffect(() => {
        if (!geocodingApiLoaded) return;
        setGeocodingService(new window.google.maps.Geocoder());
    }, [geocodingApiLoaded]);

    const handleChange = async (e) => {
        setAddress(e.target.value);
    }

    const updateMessage = (msg) => {
        setMessage(msg);
    }

    const handleClick = async () => {
        await geocodingService.geocode({ address }, (res, status) => {
            if (res && status === 'OK') {
                updateMessage('Successfully added ' + res[0].formatted_address);
                props.updateCoordinates(
                    res[0].geometry.location.lat(),
                    res[0].geometry.location.lng()
                );
            }
        });

    }

    const inputValidator = () => {
        return !(address && geocodingService);
    }

    if (!geocodingService) return <div>Loading...</div>;

    
    return <>
        <p>{message}</p>
        <label htmlFor="adress">Current Location: </label>
        <input autoComplete="off" type="text" name="address" value={address} onChange={handleChange} />
        <button className="locationButton" disabled={inputValidator()} onClick={handleClick}>Add Location</button>
    </>

}


export default GeoLocator;