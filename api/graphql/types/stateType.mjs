import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
const StateType = new GraphQLObjectType({
  name: 'State',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

export default StateType;
