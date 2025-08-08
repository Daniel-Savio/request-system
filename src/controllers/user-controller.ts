import { type FastifyRequest, type FastifyReply } from 'fastify';
import { PrismaClient } from '../prisma/index.js';
import type { User } from '../types/user.ts';
import { hashPassword, comparePassword, generateToken } from '../utils/auth.js';

const prisma = new PrismaClient();

export const register = async (request: FastifyRequest, reply: FastifyReply) => {
  const { email, password, setor, name } = request.body as User;

  if (!email || !password || !setor || !name) {
    return reply.status(400).send({ message: 'All fields must be filled' });
  }

  const hashedPassword = await hashPassword(password);
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        setor,
        name, // Assuming email can be used as a default name if not provided
      },
    });
    const { password: _, ...userWithoutPassword } = newUser;
    reply.status(201).send(userWithoutPassword);
  } catch (error: any) {
    reply.status(409).send({ message: error.message });
  }
};

export const login = async (request: FastifyRequest, reply: FastifyReply) => {
  const { email, password } = request.body as User;

  if (!email || !password) {
    return reply.status(400).send({ message: 'Email and password are required' });
  }

  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) {
    return reply.status(401).send({ message: 'Invalid credentials' });
  }

  const isPasswordCorrect = await comparePassword(password, user.password);

  if (!isPasswordCorrect) {
    return reply.status(401).send({ message: 'Invalid credentials' });
  }

  const token = generateToken({ id: user.id, email: user.email });

  reply.send({ token });
};


export const getUsers = async (request: FastifyRequest, reply: FastifyReply) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      setor: true,
    }
  });
  reply.send(users);
};
