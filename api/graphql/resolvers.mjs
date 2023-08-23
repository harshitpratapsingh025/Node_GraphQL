import User from '../models/User.mjs';
import Vendor from '../models/Vendor.mjs';
import City from '../models/City.mjs';
import State from '../models/State.mjs';
import ProductCategory from '../models/ProductCategory.mjs';
import bcrypt from 'bcryptjs';

const root = {
  user: (args) => {
    return User.findById(args.id);
  },
  users: () => {
    return User.find();
  },
  vendor: (args) => {
    return Vendor.findById(args.id);
  },
  vendors: () => {
    return Vendor.find();
  },
  cityByState: (args) => {
    return City.find({ state: args.stateId });
  },
  allState: () => {
    return State.find();
  },
  productCategories: () => {
    return ProductCategory.find();
  },
  addUser: async (args) => {
    const hash = await bcrypt.hash(args.password, 10);
    const userCreate = new User({
      firstname: args.firstName,
      lastname: args.lastName,
      email: args.email,
      password: hash,
      email: args.email,
      country: args.country,
      state: args.state,
      city: args.city,
      pincode: args.pincode,
      address: args.address,
      email_verification_token: '2435',
    });
    return userCreate.save();
  },
};

export default root;
