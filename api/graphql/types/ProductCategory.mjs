import { GraphQLObjectType, GraphQLInt, GraphQLString } from 'graphql';
const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategory',
  fields: () => ({
    name: { type: GraphQLString },
    parentCategory: { type: GraphQLString },
    isActive: { type: GraphQLInt },
    isDeleted: { type: GraphQLInt },
  }),
});

export default ProductCategoryType;
