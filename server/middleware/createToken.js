require('dotenv').config();
const jwt = require('jsonwebtoken');


module.exports.createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '3d' // Simplify with a string representation
    });
};

