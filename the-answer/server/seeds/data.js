const mongoose = require('mongoose');
const db = mongoose.connection; // This is the correct way to access the connection object
const { User, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const commentSeeds = require('./commentSeeds.json');
// Assuming this function is defined in a file named cleanDB.js
const cleanDB = require('./cleanDB');

// Collection names to be cleaned
const collectionsToClean = ['users', 'posts', 'comments'];




// Assuming '../config/db' exports a function to connect to MongoDB, ensure it's called correctly.
require('../config/db'); // This should establish the connection

db.once('open', async () => {
  try {
    cleanDB(collectionsToClean)
    .then(() => console.log('Database cleanup completed successfully.'))
    .catch(err => console.error('Database cleanup failed:', err));

    await User.create(userSeeds);
    await Post.create(postSeeds);
    await Comment.create(commentSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});


