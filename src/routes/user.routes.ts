import { FastifyInstance } from "fastify"

import { createUserController, getUsersController, auth } from "../controllers/user.controller";

export async function userRoutes(app: FastifyInstance) {
  app.get("/users", getUsersController);
  app.post("/users", createUserController);
  app.post("/auth", auth);


  // TODO: Criar rota para listar contatos
  // app.get("/contatos"); 

  // app.post("/contatos");
  // app.put("/contatos/:id");
  // app.delete("/contatos/:id");
}
