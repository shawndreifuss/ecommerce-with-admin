const { User } = require("../models");
const { createToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");
const sendMail = require("../utils/sendEmail");
const jwt = require('jsonwebtoken')

//  Register /api/auth/register
module.exports.Register = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ email, password, username, createdAt });
    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({
        success: true,
        message: "Welcome " + user.username,
        user,
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Something went wrong, please try again .",
      });
  }
};

//  Login /api/auth/login
module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User does not exist" });
    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword)
      return res.status(400).json({ message: "Invalid email or password" });
    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Welcome back " + user.username,
        user,
        token,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Handle Google Login and register  /api/auth/oauth
module.exports.OAuth = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    // If user exists, log them in
    if (existingUser) {
      const token = createToken(existingUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res
        .status(200)
        .json({
          success: true,
          message: "Welcome back " + existingUser.username,
          existingUser,
          token,
        });
      // If user does not exist, register them
    } else {
      const user = await User.create({ username, email, password });
      const token = createToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      return res
        .status(201)
        .json({
          success: true,
          message: "Welcome " + user.username,
          user,
          token,
        });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//  Reset Password with email /api/auth/reset-password
module.exports.ResetPassword = async (req, res, next) => {
  try {
    // Get users email
    const { email } = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message: "User does not exist"});
    //  Create reset password token and save it to the user
    const resetToken = createToken();
    user.passwordResetToken = resetToken;
    user.passwordResetExpires = Date.now() + 3600000; // 1 hour
    await user.save(); 
  
    //  Send email to the user with the reset password token
    const resetURL = `http://localhost:5173/reset-password/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
    
    //  Send email to the user
    try {
      await sendMail({
        email: user.email,
        subject: "Your password reset token (valid for 10 minutes)",
        message,
      });
      res.status(200).json({success: true, message: "Token sent to email"});
    } catch (error) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save();
      res.status(500).json({success: false, message: "There was an error sending the email. Try again later!"});
    }
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
}

//  Change Pasword /api/auth/reset-password/:resetToken
module.exports.ChangePassword = async (req, res, next) => {
  try {
    //  Get user based on the token
    const  {password}   = req.body
    const {resetToken} = req.params;
    
    const newPassword = password
    console.log(newPassword)
    const user = await User.findOne({
      passwordResetToken: resetToken,
      passwordResetExpires: { $gt: Date.now() }
    });

   
    if(!user) return res.status(400).json({message: "Token is invalid or has expired"});
    //  If token has not expired, and there is user, set the new password
    
    
    user.password = newPassword;
    user.passwordResetToken = undefined; // Clear the reset token
    user.passwordResetExpires = undefined; // Clear the token expiry
    await user.save();
    
    //  Log the user in, send JWT
    const token = createToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(200).json({success: true, message: "Password reset successful"});
  }
  catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
}