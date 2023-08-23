import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';
import City from '../../models/City.mjs';
import State from '../../models/State.mjs';
import CityType from './cityType.mjs';
import StateType from './stateType.mjs';

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    id: { type: GraphQLID },
    street: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    country: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    city: {
      type: CityType,
      resolve: (parent) => {
        return City.findById(parent.city);
      },
    },
    state: {
      type: StateType,
      resolve: (parent) => {
        return State.findById(parent.state);
      },
    },
  }),
});

const MediaType = new GraphQLObjectType({
  name: 'Media',
  fields: () => ({
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    media: { type: GraphQLString },
  }),
});

const VenderType = new GraphQLObjectType({
  name: 'Vender',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    description: { type: GraphQLString },
    openTime: { type: GraphQLString },
    closeTime: { type: GraphQLString },
    openDays: { type: GraphQLList(GraphQLString) },
    address: { type: AddressType },
    media: { type: GraphQLList(MediaType) },
    isFeatured: { type: GraphQLInt },
    isActive: { type: GraphQLInt },
    isDeleted: { type: GraphQLInt },
  }),
});
export default VenderType;
