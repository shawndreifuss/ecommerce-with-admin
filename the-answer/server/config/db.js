const mongoose = require('mongoose');
require('dotenv').config(); // Make sure this is at the top if you're using dotenv

const dbUri = process.env.MONGODB_URI; // Ensure this matches your .env file or environment variable name
if (!dbUri) {
  console.error('MongoDB connection URI is missing!');
  process.exit(1);
}

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected…'))
.catch(err => console.error('DB Connection Error:', err));