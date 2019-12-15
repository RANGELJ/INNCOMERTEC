import { GraphQLObjectType, GraphQLList, GraphQLSchema, GraphQLString } from 'graphql';
import AuthorType from '../../modelsTypes/author';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getAuthors: { type: new GraphQLList(AuthorType) },
  },
});

export default new GraphQLSchema({
  query: QueryType,
})