import axios from 'axios';

export const createPost = (formData: FormData) => {
  return async (dispatch: any) => {
    try {
      await axios.post('/api/posts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};