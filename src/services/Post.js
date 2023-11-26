import prisma from "../prisma/client.js";

// eslint-disable-next-line import/prefer-default-export
async function getAll() {
  return prisma.post.findMany();
}

const Posts = {
  getAll,
};

export default Posts;
