import mongoose from 'mongoose';

const VendorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emergency_contact: {
      type: String,
    },
    description: {
      type: String,
    },
    openTime: {
      type: String,
    },
    closeTime: {
      type: String,
    },
    openDays: {
      type: [String],
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      city: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'city',
        required: true,
      },
      state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'state',
        required: true,
      },
      country: {
        type: String,
        default: 'India',
      },
      latitude: {
        type: String,
      },
      longitude: {
        type: String,
      },
    },
    media: [
      {
        name: {
          type: String,
          required: true,
        },
        type: {
          type: Number,
          default: 0,
          enum: [0, 1],
        },
        media: {
          type: String,
          required: true,
        },
      },
    ],
    isFeatured: {
      type: Number,
      default: 0,
      enum: [0, 1],
    },
    isActive: {
      type: Number,
      default: 1,
      enum: [0, 1],
    },
    isDeleted: {
      type: Number,
      default: 0,
      enum: [0, 1],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Vendor', VendorSchema);
