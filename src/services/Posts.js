import prisma from "../prisma/client.js";

export default class Posts {
    static async create({ content, postedBy }) {

        
        return await prisma.post.create({
            data: {
                content,
                postedBy : {
                    connect: {
                        id: postedBy.id
                    },
                }
            },
        });
    }

    static async find({ id }) {
        return prisma.post.findUnique({
            where: {
                id,
            },
        })
    }

    static async update({ id, content }) {
        try {
            const post = await prisma.post.update({
                where: {
                    id,
                },
                data: content,

            });
            return post;
        } catch (e) {
            return null;
        }
    }

    static async getPosts() {
        return prisma.post.findMany();
    }

    static async delete({ id }) {
        try { 
            await prisma.post.delete({
                where: {
                    id,
                },
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    static async getUser(parent, args) {
        return await prisma.post.findUnique({
            where: { id: parent.id }
        })
        .postedBy();
    }
}