import mongoose from "mongoose";

const connectDb = async () => {
      try {
            await mongoose.connect(process.env.DATABASE_URL);
            console.log('Connect data base.')

      } catch (err) {
            console.log('Database connect fail..!');
            process.exit(1);

      }

}

export default connectDb;