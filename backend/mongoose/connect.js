// config script to connect to MongoDB with MongooseJS
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`.bgGreen.black);
};

module.exports = connectDB;
