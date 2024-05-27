import { useState } from "react";
import * as auth from '../../services/auth';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmedPassword: ''
    });
    const [message, setMessage] = useState(['']);

    const updateMessage = (msg) => {
        setMessage(msg)
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await auth.signUp(formData);
            setFormData({username: '', password: '', confirmedPassword: ''});
        } catch (error) {
            updateMessage(error.message)
        }
    }
    const { username, password, confirmedPassword } = formData;

    const isFormValid = () => {
        return !(username && password && password === confirmedPassword);
    }

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="username">Username/Email: </label>
                <input type="text" name="username" value={username} onChange={handleChange}/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={password} onChange={handleChange}/>
                <label htmlFor="confirmedPassword">Confirm Password: </label>
                <input type="password" name="confirmedPassword" value={confirmedPassword} onChange={handleChange}/>
                <button disabled={isFormValid()}>Register!</button>
            </form>
        </main>
    );
};

export default Signup;