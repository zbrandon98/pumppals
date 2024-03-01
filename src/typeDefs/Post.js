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

    input UserInput {
        id: ID
        name: String
        email: String
        password: String
    }

    type Mutation {
        createPost(content: String!, postedBy: UserInput): Post
        updatePost(id: ID!, content: String!): Post
        deletePost(id: ID!): Boolean
    }
`;

export default typeDefs;