import Users from "../services/Users.js";

const resolvers = {
  Query: {
    user: (_, { id }) => Users.find({ id }),
    users: () => Users.findMany(),
  },
  Mutation: {
    signup: (parent, args) => Users.signup(args),
    login: (_, { email }) => Users.login({ email }),
  },

  User: {
    posts: (parent, args) => Users.getAllPosts(parent, args)
  }

};

export default resolvers;
