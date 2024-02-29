import gql from "graphql-tag";

const typeDefs = gql`


  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    posts: [Post!]
    
  }

  type Query {
    user(id: ID!): User
    users: [User]
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): User
    login(email: String!, password: String!): User
  }
`;
export default typeDefs;
