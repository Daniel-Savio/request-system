import { type FastifyRequest, type FastifyReply, type DoneFuncWithErrOrRes } from 'fastify';
import { verifyToken } from '../utils/auth.js';

declare module 'fastify' {
  interface FastifyRequest {
    user?: any;
  }
}

export const authMiddleware = (request: FastifyRequest, reply: FastifyReply, done: DoneFuncWithErrOrRes) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: 'Missing token' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return reply.status(401).send({ message: 'Missing token' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return reply.status(401).send({ message: 'Invalid token' });
  }

  request.user = decoded;
  done();
};
