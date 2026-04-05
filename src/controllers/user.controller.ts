import { FastifyRequest, FastifyReply } from "fastify";
import { hash, compare } from "bcrypt";

import { prisma } from "../database";
import { UserModel } from "../models/user.model";


export async function getUsersController(request: FastifyRequest, reply: FastifyReply) {
  return await prisma.users.findMany();
}

export async function createUserController(request: FastifyRequest, reply: FastifyReply) {
  const { name, login, password }: any = request.body;

  try {
    const passwordHash = await hash(password, 10);
    const user = new UserModel(name, login, passwordHash);

    await prisma.users.create({
      data: {
        name: user.name,
        login: user.login,
        password: user.password
      }
    });

    const response = {
      name: user.name,
      login: user.login
    };

    return reply.status(201).send(response);
  } catch (error) {
    console.error(error);

    return { error: "Error to try save" };
  }
}

export async function auth(request: FastifyRequest, reply: FastifyReply) {
  const { login, password }: any = request.body;

  try {
    const user = await prisma.users.findFirst({
      where: { login }
    });

    if (!user) 
      return reply.status(404).send({ message: "login/password incorrect" });

    if (!await compare(password, user.password)) 
      return reply.status(404).send({ message: "login/password incorrect" });

    const response: any = {
      id: user.id,
      name: user.name,
      login: user.login
    };

    return reply.status(200).send(response);
  } catch (error) {
    console.error(error);

    return { error: "Occuren an error" };
  }
}
