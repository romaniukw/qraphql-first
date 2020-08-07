import { IResolvers } from "apollo-server-express";
import { words } from "../words";

export const resolvers: IResolvers = {
  Query: {
    words: () => words,
  },

  Mutation: {
    deleteWord: (_root: undefined, { id }: { id: string }) => {
      const index = words.findIndex((word) => word.id === id);
      if (index >= 0) return words.splice(index, 1)[0];
      throw new Error(`Can't find word with id ${id}`);
    },
  },
};
