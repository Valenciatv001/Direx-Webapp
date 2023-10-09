import React, { useState } from 'react';
import axios from 'axios'; 
import { useHistory } from 'react-router-dom';
import './Login.css';

interface LoginProps {}

const Login = (props: LoginProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userLoggedIn, setUserLoggedIn] = useState(false); 
  const [error, setError] = useState(''); 
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        phoneNumber,
        password,
      });

      if (response.data.success) {
        setUserLoggedIn(true);
        history.push('api/post');
      } else {
        throw new Error('Invalid Number: ' + response.data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='Login'>
      <div className="LoginWrapper">
        <div className="LoginLeft">
          <h3 className="LoginLogo"> Val-Social </h3>
          <span className="LoginDesc">
            Connect with friends and the world around you on Val-Social
          </span>
        </div>
        <div className="LoginRight">
          <div className="LoginBox">
            <input
              placeholder='Phone number'
              className="LoginInput"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              placeholder='Password'
              className="LoginInput"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="LoginButton" onClick={handleLogin}>
              Log In
            </button>
            <span className="LoginForget">{error}</span> {/* Display error message */}
            <button className="loginRegisterButton"> Create a New Account </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login