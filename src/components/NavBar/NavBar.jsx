import { useState } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [userType, setUserType] = useState('user');

    const toggleUserType = () => {
        if(userType === 'user') setUserType('service');
        else setUserType('user');
    };
    
    return (
        <div className="navBar">
            <button onClick={toggleUserType} className={userType === 'user' ? 'register': 'login'}>{userType}</button>
            <h1 className='yardex'>Yardex</h1>
            <ul className='signUpOrLogin'>
                <Link to={userType === 'user' ? '/register': '/register-service'}><button className='register'>Sign Up</button></Link>
                <Link to={userType === 'user' ? '/login': '/login-service'}><button className='login'>Login</button></Link>
             </ul>
        </div>
    )
    
}

export default NavBar;