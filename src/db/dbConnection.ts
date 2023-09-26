import mongoose from 'mongoose';

const startConnection = async (uri: string): Promise<void> => {
  try {
    const connection = await mongoose.connect(uri);
    if(connection) {
      console.log("Connected to Database");
      return;
    }
  } catch (err) {
    if(err instanceof Error) {
      throw err.message;
    }
  }
};

export default startConnection;