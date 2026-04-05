import Fastify from "fastify";

import { userRoutes } from "./routes/user.routes";

const port = typeof(process.env.PORT) === "string" 
  ? Number(process.env.PORT) 
  : process.env.PORT;

const server = Fastify({
  logger: true
});

server.register(userRoutes);

server.listen({ port: port ? port : 8080, host: '0.0.0.0' });
