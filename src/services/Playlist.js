import prisma from "../prisma/client.js";

// eslint-disable-next-line import/prefer-default-export
async function getAll() {
  return prisma.playlist.findMany();
}

async function create({ userId, input }) {
  const { name } = input;
  const playlist = await prisma.playlist.create({
    data: {
      userId,
      name,
    },
  });
  return playlist;
}

async function getOne({ id }) {
  return prisma.playlist.findUnique({ where: { id } });
}

async function addSong({ playlistId, songId }) {
  try {
    await prisma.playlistToSong.create({
      data: {
        playlistId,
        songId,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}

async function getSongs({ id }) {
  const songIds = await prisma.playlistToSong.findMany({
    where: {
      playlistId: id,
    },
    select: {
      songId: true,
    },
  });
  const songs = await prisma.song.findMany({
    where: {
      id: {
        in: songIds.map((obj) => obj.songId),
      },
    },
  });

  return songs;
}

const Posts = {
  getAll,
  getOne,
  create,
  addSong,
  getSongs,
};

export default Posts;
