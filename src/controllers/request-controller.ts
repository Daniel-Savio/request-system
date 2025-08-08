import { type FastifyRequest, type FastifyReply } from 'fastify';
import { PrismaClient } from '../prisma/index.js';
import type { Request } from '../prisma/index.js';

const prisma = new PrismaClient();

export const createRequest = async (request: FastifyRequest, reply: FastifyReply) => {
  const { sigma, project, assigneeId, authorId, status, device, comment, client, thirdPart, input, output } = request.body as Request;

  const newRequest = await prisma.request.create({
    data: {
      sigma,
      project,
      assigneeId,
      authorId,
      status,
      device,
      comment,
      client,
      thirdPart,
      input,
      output: output as any, // Ensure output is an array of JsonValue
    }

  });
  reply.send(newRequest);

};

export const getRequest = async (request: FastifyRequest, reply: FastifyReply) => {
  const requests = await prisma.request.findMany();
  reply.send(requests);
};