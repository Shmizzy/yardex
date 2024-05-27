import './dashboard.css';
import YardexMap from '../../components/YardexMap/YardexMap';
import { APIProvider } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_CLOUD_API_KEY}>
            <main>
                <section className='top'>
                    <div className='heading'>
                        <h1 className='greeting'>Hello, User</h1>
                        <span className='profileIcon' />
                    </div>
                </section>
                <div className='bento'>
                    <div className='map'><Link to='/map'><YardexMap /></Link></div>
                    <div className='trip'><Link to='/new-service' className='linkStyle'>New Service</Link></div>
                    <div className='scooter'><Link to='/all' className='linkStyle'>View All Services</Link></div>
                    <div className='shipment'>Shipment</div>
                    <div className='office'>Office</div>
                </div>
            </main>
        </APIProvider>
    )
}

export default Dashboard;