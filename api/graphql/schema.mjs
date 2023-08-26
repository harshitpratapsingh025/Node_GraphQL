import { GraphQLObjectType, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import UserType from './types/userType.mjs';
import VendorType from './types/vendorType.mjs';
import City from './types/cityType.mjs';
import State from './types/stateType.mjs';
import ProductCategoryType from './types/ProductCategory.mjs';

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
    vendor: {
      type: VendorType,
      args: { id: { type: GraphQLID } },
    },
    vendors: {
      type: new GraphQLList(VendorType),
    },
    cityByState: {
      type: new GraphQLList(City),
      args: { stateId: { type: GraphQLID } },
    },
    allState: {
      type: new GraphQLList(State),
    },
    productCategories: {
      type: new GraphQLList(ProductCategoryType),
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
        address: { type: GraphQLNonNull(GraphQLString) },
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
