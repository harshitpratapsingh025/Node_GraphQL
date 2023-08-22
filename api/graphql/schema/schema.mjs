import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import bcrypt from 'bcryptjs';
import UserType from '../types/userType.mjs';
import User from './../../models/User.mjs';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return User.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve: () => {
        return User.find();
      },
    },
  }),
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLNonNull(GraphQLString) },
        lastName: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
        adress: { type: GraphQLNonNull(GraphQLString) },
        pincode: { type: GraphQLNonNull(GraphQLString) },
        contact: { type: GraphQLNonNull(GraphQLString) },
        country: { type: GraphQLNonNull(GraphQLString) },
        city: { type: GraphQLNonNull(GraphQLID) },
        state: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve: async (parent, args) => {
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
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
