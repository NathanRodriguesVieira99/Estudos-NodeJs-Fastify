import fastify from "fastify";
import { fastifyCors } from "@fastify/cors";
import { Routes } from "./routes/index.ts";

const app = fastify();

// deixa acessível para front-ends
app.register(fastifyCors, { origin: "*" });

// importa as rotas
app.register(Routes);

// faz o servidor rodar
app.listen({ port: 3333 }).then(() => {
  console.log(`Server is running on port: 3333`);
});
