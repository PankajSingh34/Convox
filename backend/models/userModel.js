// userModel.js
import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema(
  {
   fullName: {
      type: String,
      required: true,
    },
   username:{
    type: String,
    required: true,
    unique: true,
   },
   password: {
      type: String,
      required: true,
    },
    profilePhoto:{
      type: String,
      default: 'https://example.com/default-profile-photo.jpg', // Default profile photo URL
    },
    gender:{
      type:String,
      enum:["male","female"],
      required:true
    }
  
  }
  ,{timestamps:true}     
);


const User = mongoose.model('User', userSchema);

export default User;
