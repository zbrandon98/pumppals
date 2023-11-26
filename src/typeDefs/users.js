import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String
  }
  type Query {
    users: [User]
  }
`;
export default typeDefs;
