import YardexMap from '../../components/YardexMap/YardexMap'
import { useState } from 'react';
import { APIProvider } from '@vis.gl/react-google-maps';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import './mapScreen.css';

const MapScreen = () => {
    const [clickedService, setClickedService] = useState({
        company_name: '',
        service: '',
        rating: '',
        availible_time: '',
    });

    return <main>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}>
            <div className='mapContainer'><YardexMap setClickedService={setClickedService} /></div>
            <Link to='/'><span className='backIcon'><ChevronLeftIcon width={30}height={30}/></span></Link>
            <div className='serviceCard'>
                <h1>{clickedService.company_name}</h1>
                <p>{clickedService.service}</p>
                <p>⭐{clickedService.rating}</p>
                <p>⏰{clickedService.availible_time}</p>
                <button>Request Service</button>
            </div>
        </APIProvider>
    </main >

}

export default MapScreen;