import request from "supertest";
import app from "../../../server.ts";

describe("Create Book", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("POST to /books should return 201", async () => {
    const response = await request(app.server).post(`/books`).send({
      title: "Livro Teste",
      author: "Autor teste",
      description: "Descrição Teste",
    });
    
    console.log(`Status: ${response.status}`);
    expect(response.status).toBe(201);
  });
});
