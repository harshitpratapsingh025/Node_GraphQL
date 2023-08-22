import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
    },
    country: {
      type: Number,
    },
    state: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'state',
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'city',
    },
    pincode: {
      type: String,
    },
    address: {
      type: String,
    },
    email_verified: {
      type: Number,
      default: 0,
      enum: [0, 1],
    },
    isActive: {
      type: Number,
      default: 1,
      enum: [0, 1],
    },
    email_verification_token: {
      type: String,
    },
    isDeleted: {
      type: Number,
      default: 0,
      enum: [0, 1],
    },
  },
  { timestamps: true },
);

export default mongoose.model('User', userSchema);
