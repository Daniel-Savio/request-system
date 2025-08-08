import type { FastifyInstance } from 'fastify';
import { createRequest, getRequests } from './controllers/request-controller.ts';

export const setupRoutes = (fastify: FastifyInstance) => {
  fastify.post('/requests', createRequest);
  fastify.get('/requests', getRequests);
};
