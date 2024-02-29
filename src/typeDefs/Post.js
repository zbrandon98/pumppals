import gql from "graphql-tag";

const typeDefs = gql`
    type Post {
        id: ID!
        content: String!
        postedBy: User
    }

    type Query {
        post(id: ID!): Post
        posts: [Post]
    }

    type Mutation {
        createPost(content: String!): Post
        updatePost(id: ID!, content: String!): Post
        deletePost(id: ID!): Boolean
    }
`;

export default typeDefs;