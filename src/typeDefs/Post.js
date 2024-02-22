import gql from "graphql-tag";

const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        content: String!
    }

    input PostInput {
        title: String!
        content: String!
    }

    type Query {
        post(id: ID!): Post
        posts(ids: [ID]!): [Post]
    }

    type Mutation {
        createPost(input: PostInput!): Post
        updatePost(id: ID!, input: PostInput!): Post
        deletePost(id: ID!): Boolean
    }
`;

export default typeDefs;