import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';
import City from './../../models/City.mjs';
import State from './../../models/State.mjs';
import CityType from './cityType.mjs';
import StateType from './stateType.mjs';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    email: { type: GraphQLString },
    contact: { type: GraphQLString },
    pincode: { type: GraphQLString },
    address: { type: GraphQLString },
    email_verification_token: { type: GraphQLString },
    email_verified: { type: GraphQLInt },
    isActive: { type: GraphQLInt },
    isDeleted: { type: GraphQLInt },
    city: {
      type: CityType,
      resolve: (parent, args) => {
        return City.findById(parent.city);
      },
    },
    state: {
      type: StateType,
      resolve: (parent, args) => {
        return State.findById(parent.state);
      },
    },
  }),
});
export default UserType;
