import gql from "graphql-tag";

const typeDefs = gql`
  type Post {
    id: ID
    name: String
    text: String
  }
  type Query {
    posts: [Post]
  }
`;
export default typeDefs;
