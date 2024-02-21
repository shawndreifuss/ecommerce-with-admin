const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const PORT = process.env.PORT 

//  Database
require('./config/db');

//  Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin:  'http://localhost:5173',
  methods: "GET,PUT,POST,DELETE",
  credentials: true
}));
app.use(cookieParser());


// Routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});