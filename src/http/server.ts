import fastify from "fastify";
import { createBook } from "./routes/create-book.ts";
import { getBook } from "./routes/get-book.ts";
import { updateBook } from "./routes/upddate-book.ts";
import { deleteBook } from "./routes/delete-book.ts";

const app = fastify();

// registra as rotas
app.register(createBook);
app.register(getBook);
app.register(updateBook);
app.register(deleteBook);

// faz o servidor rodar
app.listen({ port: 3333 }).then(() => {
  console.log(`Server is running on port: 3333`);
});
