import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

// Create a context
const UserContext = createContext();

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Reducer function to manage state changes
function userReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

// Create a provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
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

    verifyUser();
  }, []);


  // Logout function
  const logout = async () => {
    try {
      await axios.get('http://localhost:3001/api/auth/logout', { withCredentials: true });
      dispatch({ type: 'LOGOUT' }); // Update state to reflect logout
    } catch (error) {
      console.error('Error during logout:', error);
      // Optionally handle logout error, maybe by showing a message to the user
    }
  };

  return (
    <UserContext.Provider value={{ state, dispatch, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => useContext(UserContext);
