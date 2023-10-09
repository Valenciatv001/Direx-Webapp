import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './SignUp.css';

interface SignUpProps {}

const SignUp = (props: SignUpProps) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const history = useHistory();

  const handleSignUp = async () => {
    
    try {
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
        passwordRepeat,
      });

      // Handle the response from the backend, e.g., display success message or errors.
      if (response.data.success) {
        history.push('api/post');
      } else {
        throw new Error('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      // Handle errors, e.g., network issues or server errors.
      console.error('Registration failed:', error);
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
              placeholder='Username'
              className="LoginInput"
              value={username}
              onChange={(e: { target: { value: any; }; }) => setUsername(e.target.value)}
            />
            <input
              placeholder='Email'
              className="LoginInput"
              value={email}
              onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)}
            />
            <input
              placeholder='Password'
              className="LoginInput"
              type="password"
              value={password}
              onChange={(e: { target: { value: any; }; }) => setPassword(e.target.value)}
            />
            <input
              placeholder='Password Repeat'
              className="LoginInput"
              type="password"
              value={passwordRepeat}
              onChange={(e: { target: { value: any; }; }) => setPasswordRepeat(e.target.value)}
            />
            <button className="LoginButton" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp