import axios from 'axios';

export const logIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUp = (firstName: string, lastName: string, email: string, password: string, phoneNumber: string, gender: string) => {
  return async (dispatch: any) => {
    try {
      await axios.post('/api/signup', { firstName, lastName, email, password, phoneNumber, gender });
    } catch (error) {
      console.log(error);
    }
  };
};

export const resetPassword = (email: string) => {
  return async (dispatch: any) => {
    try {
      await axios.post('/api/reset-password', { email });
    } catch (error) {
      console.log(error);
    }
  };
};