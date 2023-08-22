import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  state: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'State',
  },
});

export default mongoose.model('City', citySchema);
