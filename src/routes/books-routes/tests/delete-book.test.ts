import app from "../../../server.ts";
import request from "supertest";

describe("Create Book to test  delete", () => {
  // tipa o mock do ID do book
  let bookId: string;

  // espera o app rodar
  beforeAll(async () => {
    await app.ready();
  });

  // espera o app parar
  afterAll(async () => {
    await app.close();
  });

  it(" POST to /books should return 201 ", async () => {
    // testa a criação do livro na API
    const response = await request(app.server).post(`/books`).send({
      title: "Livro Teste",
      author: "Autor Teste",
      description: "Descrição Teste",
    });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Livro Teste");
    expect(response.body.author).toBe("Autor Teste");
    expect(response.body.description).toBe("Descrição Teste");

    // verifica se foi criado na API
    expect(response.status).toBe(201);

    // pega o ID do livro criado
    const createdBook = response.body as { id: string };

    // verifica se possui ID
    bookId = createdBook.id;
    expect(bookId).toBeDefined();
  });

  it("DELETE to /books/:bookId should return 204 ", async () => {
    // testa a deleção de um livro

    // verifica se um livro foi criado
    if (!bookId) {
      throw new Error("bookId não foi definido. O livro não foi criado.");
    }

    // faz a requisição DELETE
    const deleteBook = await request(app.server).delete(`/books/${bookId}`);

    // verifica se a resposta do DELETE é 204
    console.log(`Status: ${deleteBook.status}`);
    expect(deleteBook.status).toBe(204);

    // verifica se o livro realmente foi deletado e gera 404
    const getResponse = await request(app.server).get(`/books/${bookId}`);

    console.log(`Status: ${getResponse.status}`);
    expect(getResponse.status).toBe(404);
  });
});
