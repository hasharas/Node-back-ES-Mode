import mongoose from 'mongoose';
import connectDb from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import userRouters from './routers/userRouters.js'



dotenv.config();
connectDb();
// console.log(connectDb);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRouters);

const PORT = process.env.PORT || 5001;


app.listen(PORT, () => {
      console.log(`Server runnig port ${PORT} `);
})