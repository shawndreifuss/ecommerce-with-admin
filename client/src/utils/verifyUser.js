import axios from "axios";

const verifyUser = async () => {
    try {
      // Adjust the URL to your backend verification endpoint
      const response = await axios.get('http://localhost:3001/api/auth/me', { withCredentials: true });
      dispatch({ type: 'SET_USER', payload: response.data.user });
    } catch (error) {
      console.error('Error verifying user session:', error);
      dispatch({ type: 'LOGOUT' });
    }
  };

  export default verifyUser;