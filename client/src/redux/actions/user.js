import axios from "axios";

// Load User Action
export const loadUser = () => async (dispatch) => {
  dispatch({ type: "LoadUserRequest" });

  try {
    // Fixed: Added await to properly handle the asynchronous request
    const { data } = await axios.get('http://localhost:3001/api/auth/getuser', {
      withCredentials: true // Ensures cookies are sent with the request, important for sessions
    });

    console.log(data);

    // Assuming 'data' contains the user object directly
    // The response structure should be validated against your actual API response
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user, // Ensure this matches the structure of your API response
    });
  } catch (error) {
    // Improved error handling
    // Using optional chaining to safely access nested properties
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({
      type: "LoadUserFail",
      payload: errorMessage,
    });
  }
};

// Logout Action
export const logout = () => async (dispatch) => {
  dispatch({ type: "LogoutRequest" });

  try {
    // If your API endpoint for logout is not defined, ensure you have a valid URL here
    // Example: await axios.get('http://localhost:3001/api/auth/logout', { withCredentials: true });
    // For demonstration, I'll assume the logout process might just clear the session/cookie on the client-side
    // and perhaps invalidate the session on the server-side

    // Placeholder for actual logout logic
    // Assuming the logout process clears the user data or invalidates the session token
    dispatch({
      type: "LogoutSuccess",
      // Payload can be adjusted based on what the backend actually returns or needs
      payload: null, // Assuming logout clears the user data
    });
  } catch (error) {
    // Using optional chaining and providing a default message if the response structure is unexpected
    const errorMessage = error.response?.data?.message || 'Logout failed';
    dispatch({
      type: "LogoutFail",
      payload: errorMessage,
    });
  }
};
