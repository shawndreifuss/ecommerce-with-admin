// userService.js
const { User, UserSettings } = require('../models');

async function registerUser(userData) {
  // Create user settings with default values
  const userSettings = await UserSettings.create();
  
  // Create the user with hashed password and link to the settings document
  const user = await User.create({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
    settings: userSettings._id
  });

  return user;
}

module.exports = { registerUser };
