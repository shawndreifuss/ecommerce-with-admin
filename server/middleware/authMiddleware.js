const { User } = require('../models');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ status: false, message: "Please Login" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Ensure your environment variable is correctly named
        req.user = await User.findById(decoded.id).lean(); // Use .lean() for performance improvement

        if (!req.user) {
            return res.status(401).json({ status: false, message: "User not found" });
        }

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ status: false, message: "Token has expired, please login again" });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ status: false, message: "Invalid token" });
        } else {
            console.error("Authentication error: ", error);
            return res.status(500).json({ status: false, message: "Failed to authenticate" });
        }
    }
};




  

