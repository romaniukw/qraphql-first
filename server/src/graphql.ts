import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString as String,
  GraphQLID as ID,
  GraphQLList as List,
  GraphQLNonNull,
} from "graphql";
import { words } from "./words";

const Category = new GraphQLObjectType({
  name: "category",
  fields: {
    id: { type: ID },
    name: { type: String },
  },
});

const Word = new GraphQLObjectType({
  name: "word",
  fields: {
    id: { type: GraphQLNonNull(ID) },
    categories: { type: GraphQLNonNull(List(GraphQLNonNull(Category))) },
    word: { type: String },
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    words: {
      type: GraphQLNonNull(List(GraphQLNonNull(Word))),
      resolve: () => {
        return words;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    deleteWord: {
      type: GraphQLNonNull(Word),
      args: {
        id: { type: GraphQLNonNull(ID) },
      },
      resolve: (_root, { id }) => {
        const index = words.findIndex((word) => word.id === id);
        console.log(index);
        if (index >= 0) return words.splice(index, 1)[0];
        throw new Error(`Can't find word with id ${id}`);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query, mutation });
