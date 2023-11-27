import Users from "../services/User.js";

const resolvers = {
  User: {
    playlists: ({ id }) => Users.getPlaylists({ id }),
  },
  Query: {
    user: (_, { id }) => Users.getUser({ id }),
    users: (_, { id, name }) => Users.getUsers({ id, name }),
  },
  Mutation: {
    createUser: (_, { input }) => Users.createUser({ input }),
    // updateUser: (_, { id, input }) => Users.updateUser({ id, input }),
    // deleteUser: (_, { id }) => Users.deleteUser({ id }),
  },
};

export default resolvers;
