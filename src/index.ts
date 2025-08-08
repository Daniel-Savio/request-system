import Fastify from 'fastify';
import { setupRoutes } from './routes.ts';

const fastify = Fastify({
  logger: true,
});

setupRoutes(fastify);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
