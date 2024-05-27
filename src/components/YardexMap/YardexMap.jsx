import { Map } from '@vis.gl/react-google-maps';
import Markers from '../Markers/Markers';
import * as markerService from '../../services/markers';
import { useState,useEffect } from 'react';

const YardexMap = ({ setClickedService }) => {
  const [markers, setMarkers] = useState([])
  
  useEffect(()=> {
    const loadServices = async () => {
      const fetchedServices = await markerService.fetchAllMarkers();
      setMarkers(fetchedServices);
  }
  loadServices();
  }, [])

  return <>
    <Map
      mapId={import.meta.env.VITE_GOOGLE_CLOUD_MAP_ID}
      defaultCenter={{ lat: 26.206808, lng: -98.355351 }}
      defaultZoom={16}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
      tilt={30}
    >
      <Markers markers={markers} setClickedService={setClickedService} />
    </Map>
  </>
}

export default YardexMap;