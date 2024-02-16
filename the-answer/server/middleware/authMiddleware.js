const { User } = require('../models');
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.userVerification = (req, res) => {
    const token = req.cookies.token
    if(!token) {
        return res.status(401).json({ status: false, message: "Please Login"});
    }
    jwt.verify(token, process.env.TOKEN, async (err, data) => {
      if(err) {
        return res.status(401).json({ status: false, message: "Please Login"});
      }else {
        const user = await User.findById(data.id);
        if(user) {
            return res.status(200).json({ status: true, message: "User Verified", user: user});

        } else {
            return res.status(401).json({ status: false, message: "Please Login"});
        }
      }


    })

}