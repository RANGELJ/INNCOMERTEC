import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import authorType from '../author';

export default new GraphQLObjectType({
  name: 'Post',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    author: { type: new GraphQLList(authorType) },
  },
});