import Playlists from "../services/Playlist.js";
import Users from "../services/User.js";

const resolvers = {
  Playlist: {
    user: ({ userId }) => Users.getUser({ id: userId }),
    songs: ({ id }) => Playlists.getSongs({ id }),
  },
  Query: {
    playlist: (_, { id }) => Playlists.getOne({ id }),
    playlists: () => Playlists.getAll(),
  },
  Mutation: {
    createPlaylist: (_, { userId, input }) =>
      Playlists.create({ userId, input }),
    addSong: (_, { playlistId, songId }) =>
      Playlists.addSong({ playlistId, songId }),
  },
};
export default resolvers;
