require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN, {
        expiresIn: 3 * 24 * 60 * 60
        
    });
   
}

module.exports.verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        console.log("verified");
       
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}