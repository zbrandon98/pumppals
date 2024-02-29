import Posts from "../services/Posts.js";

const resolvers = {
    Query: {
        post: (_, { id }, context, info) => Posts.find({ id }, context),
        posts: () => Posts.getPosts(),
    },
    Mutation: {
        createPost: (_, args) => Posts.create(args),
        updatePost: (_, { id, content }) => Posts.update({ id, content }),
        deletePost: (_, { id }) => Posts.delete({ id }),
    },
}

export default resolvers;