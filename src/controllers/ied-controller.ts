import { type FastifyRequest, type FastifyReply } from 'fastify';
import { PrismaClient } from '../prisma/index.js';
import type { IED } from '../types/ied.ts';

const prisma = new PrismaClient();

export const createIed = async (request: FastifyRequest, reply: FastifyReply) => {
  const { name, manufacturer, homologado } = request.body as IED;
  const newIed = await prisma.iEDs.create({
    data: {
      name: name ?? null,
      manufacturer: manufacturer ?? '',
      homologado: homologado ?? false,
    },
  });
  reply.send(newIed);
};

export const getIeds = async (request: FastifyRequest, reply: FastifyReply) => {
  const ieds = await prisma.iEDs.findMany();
  reply.send(ieds);
};
