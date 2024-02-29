import Users from "../services/Users.js";

const resolvers = {
  Query: {
    user: (_, { id }) => Users.find({ id }),
    users: (_, { ids }) => Users.findMany({ ids }),
  },
  Mutation: {
    signup: (parent, args) => Users.signup(args),
    login: (parent, args) => {Users.login(args)},
  },
};

export default resolvers;
