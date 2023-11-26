import Posts from "../services/Post.js";

const resolvers = {
  Query: {
    posts: () => Posts.getAll(),
  },
};
export default resolvers;
