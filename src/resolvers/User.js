import Users from "../services/User.js";

const resolvers = {
  Query: {
    user: (_, { id, name }) => Users.getUser({ id, name }),
    users: (_, { id, name }) => Users.getUsers({ id, name }),
  },
  Mutation: {
    createUser: (_, { input }) => Users.createUser({ input }),
  },
};

export default resolvers;
