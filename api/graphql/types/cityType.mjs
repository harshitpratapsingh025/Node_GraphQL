import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  }),
});

export default CityType;
