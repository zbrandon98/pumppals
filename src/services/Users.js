import prisma from "../prisma/client.js";

export default class Users {

  static async find({ id }) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  static async findMany() {
    return prisma.user.findMany();
  }

  static async signup({ email, password, name }) {
    const user = await prisma.user.create({ data: { email, password, name}})
    if (!user) {
      throw new Error('No such user found')
    }

    return user
  }

  static async login({ email, password }) {
    const user = await prisma.user.findUnique({where: { email, password }})
    if (!user) {
      throw new Error('No such user found')
    }

    return user;
  }
}
