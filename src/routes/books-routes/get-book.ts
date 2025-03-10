import type { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma.ts";
import { z } from "zod";

// criação da rota  que lista todos os dados com o método GET
export async function getBook(app: FastifyInstance) {
  app.get("/books", async (request, reply) => {
    // método que lista tudo pelo prisma
    const books = await prisma.book.findMany();
    return reply.status(200).send(books);
  });

  // criação da rota que lista um dado especifico
  app.get("/books/:bookId", async (request, reply) => {
    //validação com o zod verificando se o dado existe
    const getBookParam = z.object({
      bookId: z.string().uuid(),
    });
    // busca o dado pelo ID
    const { bookId } = getBookParam.parse(request.params);
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      return reply.code(404).send("Book not found");
    }
    
    return reply.status(200).send(book);
  });
}
