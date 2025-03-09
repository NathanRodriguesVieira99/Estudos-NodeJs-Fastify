import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.ts";

// criação da rota  que adiciona os dados com o método POST
export async function createBook(app: FastifyInstance) {
  app.post("/books", async (request, reply) => {
    // validação com zod dos parâmetros
    const createBookBody = z.object({
      title: z.string(),
      author: z.string(),
      description: z.string(),
    });

    const { title, author, description } = createBookBody.parse(request.body);

    // salva os dados no banco de dados através da model criada no arquivo do prisma
    const book = await prisma.book.create({
      data: {
        title,
        author,
        description,
      },
    });

    return reply.status(201).send({ bookId: book.id });
  });
}
