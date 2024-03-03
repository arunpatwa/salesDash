import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    RegistrarID: Number,

    name: {
      type: String,
      required: [true, true, "Please provide your Name"],
      min: 2,
      max: 100,
    },
    Age: Number,
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide your email"],
      max: 50,
    },
    password: {
      type: String,
      required: [true, "Please provide your Password"],
      min: 5,
    },
    city: String,
    Phone_Number: {
      type: Number,
    },
    Address: String,
    ZipCode: Number,
  },
  { timestamps: true }
);

const User=mongoose.model("User",userSchema)
