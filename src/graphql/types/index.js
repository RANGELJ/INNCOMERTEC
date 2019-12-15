import { mergeTypes } from 'merge-graphql-schemas';
import post from './post';
import author from './author';

const types = [post, author];

export default mergeTypes(types, { all: true });