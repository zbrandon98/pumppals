import prisma from "../prisma/client.js";

// eslint-disable-next-line import/prefer-default-export
async function getAll() {
  return prisma.song.findMany();
}

async function create({ input }) {
  const { name } = input;
  const song = await prisma.song.create({
    data: {
      name,
    },
  });
  console.log(song);
  return song;
}

async function getOne({ id }) {
  return prisma.song.findUnique({ where: { id } });
}

const Songs = {
  getAll,
  getOne,
  create,
};

export default Songs;
