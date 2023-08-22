import mongoose from 'mongoose';

const passwordResetSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    token: {
      type: String,
    },
    expireAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

export default mongoose.model('PasswordReset', passwordResetSchema);
