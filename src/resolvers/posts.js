const resolvers = {
  Query: {
    posts: () => [
      {
        name: "austin post",
        text: "shih",
      },
      {
        name: "brandon post",
        text: "wong",
      },
    ],
  },
};
export default resolvers;
