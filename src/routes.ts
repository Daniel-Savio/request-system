import type { FastifyInstance } from 'fastify';
import { createRequest, getRequest } from './controllers/request-controller.ts';
import { createIed, getIeds } from './controllers/ied-controller.ts';
import { register, login, getUsers } from './controllers/user-controller.ts';
import { authMiddleware } from './middlewares/auth-middleware.ts';

export const setupRoutes = (fastify: FastifyInstance) => {
  // Auth routes
  fastify.post('/register', register);
  fastify.post('/login', login);

  // User routes
  fastify.get('/users', { preHandler: [authMiddleware] }, getUsers);

  // Request routes
  fastify.post('/requests', { preHandler: [authMiddleware] }, createRequest);
  fastify.get('/requests', { preHandler: [authMiddleware] }, getRequest);

  // IEDs routes
  fastify.post('/ieds', createIed);
  fastify.get('/ieds', getIeds);
};
