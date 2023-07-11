import mongoose from 'mongoose';

const uri = 'mongodb+srv://Sakshi:zIJ4J9iMp3LuLrHE@clustersof.fh2ixqk.mongodb.net/';

// Create a reusable connection object
const dbConnect = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
};

export default dbConnect;
