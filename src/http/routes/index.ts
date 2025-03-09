import type { FastifyInstance } from "fastify";
import { createBook } from "./books-routes/create-book.ts";
import { getBook } from "./books-routes/get-book.ts";
import { updateBook } from "./books-routes/update-book.ts";
import { deleteBook } from "./books-routes/delete-book.ts";

export async function Routes(app: FastifyInstance) {
  // registra as rotas
  app.register(createBook);
  app.register(getBook);
  app.register(updateBook);
  app.register(deleteBook);
}
