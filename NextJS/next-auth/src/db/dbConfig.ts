import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const conncetion = mongoose.connection;

    conncetion.on('connected', () => {
      console.log('MongoDB Connected');
    })

    conncetion.on('error', (err) => {
      console.log('MongoDB Connection Error' + err);
    })

  } catch (error) {
    console.log('Something went Wrong!');
    console.log(error);
  }
}