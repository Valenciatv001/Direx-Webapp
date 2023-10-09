import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { signUp, logIn, resetPassword } from '../actions/authActions';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUp(email, password));
    } else {
      dispatch(logIn(email, password));
    }
    history.push('/');
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {isSignUp && (
        <>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </>
      )}
      <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
      {!isSignUp && (
        <button type="button" onClick={() => setIsSignUp(true)}>
          Sign Up
        </button>
      )}
      {isSignUp && (
        <button type="button" onClick={() => setIsSignUp(false)}>
          Log In
        </button>
      )}
      <button type="button" onClick={handleResetPassword}>
        Reset Password
      </button>
    </form>
  );
};

export default AuthForm;