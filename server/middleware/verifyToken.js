const jwt = require('jsonwebtoken');

// Assuming you're using Express and cookie-parser is set up
const verifyToken = (req, res, next) => {
    // Accessing the token from cookies
    const token = req.cookies.token; // Make sure you have cookie-parser middleware set up

    // Check if token is not present
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Attach the user (decoded token) to the request object
      req.user = decoded;
      next(); // Pass control to the next middleware function
    } catch (err) {
      // Handle invalid token
      return res.status(401).send("Invalid Token");
    }
};

module.exports = verifyToken;
