import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Category {
    id: ID
    name: String!
  }

  type Word {
    id: ID!
    categories: [Category!]!
    word: String!
  }

  type Query {
    words: [Word!]!
  }

  type Mutation {
    deleteWord(id: ID!): Word!
  }
`;
