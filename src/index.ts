import Fastify from 'fastify';
import cors from '@fastify/cors';
import { setupRoutes } from './routes.ts';

const fastify = Fastify({
  logger: true,
});

fastify.register(cors);

setupRoutes(fastify);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
