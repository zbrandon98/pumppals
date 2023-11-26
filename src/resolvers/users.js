const resolvers = {
  Query: {
    users: () => [
      {
        id: 1,
        name: "austin",
      },
      {
        id: 2,
        name: "brandon",
      },
    ],
  },
};
export default resolvers;
