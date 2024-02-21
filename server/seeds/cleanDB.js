const mongoose = require('mongoose'); // Make sure mongoose is required in the file


module.exports = async (collectionNames) => {
  try {
    for (const collectionName of collectionNames) {
      // Check if the collection exists in the database
      const collectionExists = await mongoose.connection.db.listCollections({ name: collectionName }).toArray();
      
      // If the collection exists, drop it
      if (collectionExists.length > 0) {
        await mongoose.connection.db.dropCollection(collectionName);
        console.log(`${collectionName} collection dropped.`);
      }
    }
  } catch (err) {
    console.error(`Error during database cleanup:`, err);
    throw err; // Rethrow the error if necessary
  }
};