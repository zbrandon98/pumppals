import Posts from "../services/Posts.js";

const resolvers = {
    Query: {
        post: (_, { id }) => Posts.find({ id }),
        posts: () => Posts.getPosts(),
    },
    Mutation: {
        createPost: (_, { content }) => Posts.create({ content }),
        updatePost: (_, { id, content }) => Posts.update({ id, content }),
        deletePost: (_, { id }) => Posts.delete({ id }),
    },
}

export default resolvers;