import Songs from "../services/Song.js";

const resolvers = {
  Song: {
    playlists: () => null,
  },
  Query: {
    song: () => Songs.getOne(),
    songs: () => Songs.getAll(),
  },
  Mutation: {
    createSong: (_, { input }) => {
      console.log(input);
      return Songs.create({ input });
    },
  },
};
export default resolvers;
