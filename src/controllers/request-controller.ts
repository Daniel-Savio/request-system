import { type FastifyRequest, type FastifyReply } from 'fastify';
import { PrismaClient } from '../prisma/index.js';

const prisma = new PrismaClient();

export const createRequest = async (request: FastifyRequest, reply: FastifyReply) => {
  const { content } = request.body as { content: string };
  const newRequest = await prisma.request.create({
    data: {
      content,
    },
  });
  reply.send(newRequest);
};

export const getRequests = async (request: FastifyRequest, reply: FastifyReply) => {
  const requests = await prisma.request.findMany();
  reply.send(requests);
};
