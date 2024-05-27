import * as markerService from '../../services/markers';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './allServices.css'

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const loadServices = async () => {
            const fetchedServices = await markerService.fetchAllMarkers();
            setServices(fetchedServices);
        }
        loadServices();
    }, [1])

    const handleClick = async (id) => {
        await markerService.removeMarker(id);
        const fetchedServices = await markerService.fetchAllMarkers();
        setServices(fetchedServices);
    }

    if (services.length === 0) return <>
        <div>There are no services availible...</div>
        <Link to='/'><button>Go Back</button></Link>
    </>



    return <main>
        <h1>All Services</h1>
        <div className='all'>
            {services.map(element => {
                return <div className='service' key={element._id}>
                    <h2>{element.company_name}</h2>
                    <p>Services: {element.service}</p>
                    <p>⭐{element.rating}</p>
                    <p>⏰{element.availible_time}</p>
                    <button onClick={() => handleClick(element._id)}>Remove Service</button>
                </div>
            })}
            <Link to='/'><button className='return'>Return Home</button></Link>
            
        </div>
    </main>
}

export default AllServices;