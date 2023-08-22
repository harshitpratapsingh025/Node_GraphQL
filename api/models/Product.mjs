import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    priceCurrency: {
      type: String,
      default: 'INR',
    },
    type: {
      type: Number,
      default: 1,
      enum: [1, 2], //1= new, 2=old
    },
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
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'vendor',
    },
    productVariant: [
      {
        title: {
          type: String,
        },
        color: {
          type: String,
        },
        size: {
          type: String,
          enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        },
        price: {
          type: String,
        },
        availability: {
          type: Number,
          default: 1,
          enum: [0, 1],
        },
      },
    ],
    productCategory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productCategory',
      },
    ],
  },
  { timestamps: true },
);
export default mongoose.model('Product', ProductSchema);
