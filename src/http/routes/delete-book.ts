import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.ts";

// criação da rota que apaga dados com o método DELETE
export async function deleteBook(app: FastifyInstance) {
  app.delete("/books/:bookId", async (request, reply) => {
    // validação com zod
    const getBooksParam = z.object({
      bookId: z.string().uuid(),
    });
    const { bookId } = getBooksParam.parse(request.params);

    // busca pelo ID
    const book = prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      return reply.code(404).send("Book not found");
    }

    // método de deletar pelo prisma
    await prisma.book.delete({
      where: {
        id: bookId,
      },
    });
    reply.code(204).send;
  });
}
