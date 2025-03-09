import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.ts";

// cria a rota que atualiza os dados pelo método PATCH
export async function updateBook(app: FastifyInstance) {
  app.patch("/books/:bookId", async (request, reply) => {
    // validação com o zod
    const getBookParam = z.object({
      bookId: z.string().uuid(),
    });
    const getBookBody = z.object({
      isFavorite: z.optional(z.boolean()),
      isReading: z.optional(z.boolean()),
      isFinished: z.optional(z.boolean()),
    });

    const { bookId } = getBookParam.parse(request.params);
    const { isFavorite, isFinished, isReading } = getBookBody.parse(
      request.body
    );

    // busca pelo ID
    const book = await prisma.book.findUnique({
      where: {
        id: bookId,
      },
    });

    if (!book) {
      reply.code(404).send("Book not found");
    }

    // método de update pelo prisma
    await prisma.book.update({
      where: {
        id: bookId,
      },
      data: {
        isFavorite: isFavorite || book?.isFavorite,
        isReading: isReading || book?.isReading,
        isFinished: isFinished || book?.isFinished,
      },
    });
    reply.send();
  });
}
