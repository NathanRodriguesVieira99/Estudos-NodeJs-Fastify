import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { Routes } from "./routes/index.ts";

const app = fastify();

// faz o servidor rodar
app.listen({ port: 3333 }).then(() => {
  console.log(`Server is running on port: 3333`);
});

// deixa acessível para front-ends
app.register(fastifyCors, { origin: "*" });

// importa as rotas
app.register(Routes);

// doc com Swagger
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "Books API",
      version: "1.0.0",
    },
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: "/docs",
});

export default app;
