import request from "supertest";
import app from "../../../server.ts";

describe("Create Book", () => {
  // espera o app rodar
  beforeAll(async () => {
    await app.ready();
  });

  // espera o app parar
  afterAll(async () => {
    await app.close();
  });

  it("POST to /books should return 201", async () => {
    // testa a criação de um livro
    const response = await request(app.server).post(`/books`).send({
      title: "Livro Teste",
      author: "Autor Teste",
      description: "Descrição Teste",
    });

    console.log(`Status: ${response.status}`);
    console.log(response.body);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Livro Teste");
    expect(response.body.author).toBe("Autor Teste");
    expect(response.body.description).toBe("Descrição Teste");
  });
});
