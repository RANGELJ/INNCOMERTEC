import { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString } from 'graphql';
import PostType from '../../modelsTypes/post';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getPosts: { type: new GraphQLList(PostType), args: { name: { type: GraphQLString } } },
  },
});

export default new GraphQLSchema({
  query: QueryType,
})