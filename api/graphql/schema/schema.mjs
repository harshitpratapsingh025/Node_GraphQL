import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import UserType from '../types/userType.mjs';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
    },
    users: {
      type: new GraphQLList(UserType),
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
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation,
});
