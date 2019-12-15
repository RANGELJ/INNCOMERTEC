import { mergeResolvers } from 'merge-graphql-schemas';
import post from './post';
import author from './author';

const resolvers = [post, author];

export default mergeResolvers(resolvers);