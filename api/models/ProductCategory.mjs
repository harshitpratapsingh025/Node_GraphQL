import mongoose from 'mongoose';

const ProductCategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'productCategory',
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

export default mongoose.model('ProductCategory', ProductCategorySchema);
