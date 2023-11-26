import prisma from "../prisma/client.js";

// eslint-disable-next-line import/prefer-default-export
async function getAll() {
  return prisma.user.findMany();
}

async function getMany({ id, name }) {
  return prisma.user.findMany({
    where: {
      OR: [{ id: parseInt(id, 10) }, { name: name || undefined }],
    },
  });
}

async function getUsers({ id, name }) {
  if (!id && !name) {
    return getAll();
  }
  return getMany({ id, name });
}

async function getUser({ id, name }) {
  return prisma.user.findFirst({
    where: {
      OR: [{ id: parseInt(id, 10) }, { name: name || undefined }],
    },
  });
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
  getUser,
  createUser,
};

export default Users;
