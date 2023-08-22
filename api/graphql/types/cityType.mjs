import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import State from '../../models/State.mjs';
import StateType from './stateType.mjs';

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    state: {
      type: StateType,
      resolve: (parent, args) => {
        return State.findById(parent.state);
      },
    },
  }),
});

export default CityType;
