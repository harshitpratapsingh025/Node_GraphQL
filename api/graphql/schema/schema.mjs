import { GraphQLObjectType, GraphQLID, GraphQLSchema } from 'graphql';
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
  }),
});

export default new GraphQLSchema({
  query: RootQuery,
});
