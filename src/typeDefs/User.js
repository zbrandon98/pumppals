import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }

  input UserInput {
    name: String!
  }

  type Query {
    user(id: ID, name: String): User
    users(id: ID, name: String): [User]
  }

  type Mutation {
    createUser(input: UserInput!): User
  }
`;
export default typeDefs;
