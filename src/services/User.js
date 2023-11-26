import prisma from "../prisma/client.js";

// eslint-disable-next-line import/prefer-default-export
async function getAll() {
  return prisma.user.findMany();
}

async function getOne({ id, name }) {
  return prisma.user.findUnique({
    where: {
      OR: [{ id }, { name }],
    },
  });
}

async function getUsers({ id, name }) {
  if (!id && !name) {
    return getAll();
  }
  return getOne({ id, name });
}

async function createUser({ input }) {
  const { name } = input;
  const user = await prisma.user.create({
    data: {
      name,
    },
  });
  return user;
}

const Users = {
  getUsers,
  createUser,
};

export default Users;
