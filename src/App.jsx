import { Route, Routes } from 'react-router-dom';
import Dashboard from './Screens/Dashboard/Dashboard';
import MapScreen from './Screens/MapScreen/MapScreen';
import AllServices from './Screens/AllServices/AllServices';
import NewServiceForm from './Screens/NewServiceForm/NewServiceForm';
import './App.css'





 const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/map' element={<MapScreen />}/>
        <Route path='/all' element={<AllServices />}/>
        <Route path='/new-service' element={<NewServiceForm />}/>
      </Routes> 
  ) 
}

export default App;

 
 
