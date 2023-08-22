import mongoose from 'mongoose';

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

export default mongoose.model('State', stateSchema);
