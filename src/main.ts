import Fastify from "fastify";

import { userRoutes } from "./routes/user.routes";

const server = Fastify({
  logger: true
});

server.register(userRoutes);

server.listen({ port: 8080, host: '0.0.0.0' });
