import axios from 'axios';


const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/auth/me', { withCredentials: true });
      // Dispatch action to set user
      dispatch({ type: 'SET_USER', payload: response.data.user });
      console.log('User fetched successfully');
    } catch (error) {
      console.error('Failed to fetch user', error);
    }
  };

export default fetchUserData;