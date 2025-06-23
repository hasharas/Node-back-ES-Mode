import mongoose from "mongoose";


const userModel = new mongoose.Schema({
      name: {
            type: String,
            require: true
      },
      age: {
            type: Number,
            require: true
      },
      mobile: {
            type: Number,
            require: true
      }
},
      {
            timestamps: true
      })

const Men = mongoose.model('Men', userModel);

export default Men;