describe("Create Book to test  delete", () => {
  let bookId: string;
  it(" POST to /books should return 201 ", async () => {
    // testa a criação do livro na API
    const response = await fetch("http://localhost:3333/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Livro Teste Delete",
        author: "Autor Teste Delete",
        description: "Descrição Teste Delete",
      }),
    });

    // verifica se foi criado na API
    expect(response.status).toBe(201);

    // pega o ID do livro criado
    const createdBook = (await response.json()) as { bookId: string };

    bookId = createdBook.bookId;
    expect(bookId).toBeDefined();
  });
  it("DELETE to /books/:bookId should return 204 ", async () => {
    // testa a deleção de um livro

    // verifica se um livro foi criado
    if (!bookId) {
      throw new Error("bookId não foi definido. O livro não foi criado.");
    }

    // faz a requisição DELETE
    const deleteBook = await fetch(`http://localhost:3333/books/${bookId}`, {
      method: "DELETE",
    });

    // verifica se a resposta do DELETE é 204
    expect(deleteBook.status).toBe(204);

    // verifica se o livro realmente foi deletado

    const getResponse = await fetch(`http://localhost:3333/books/${bookId}`);

    expect(getResponse.status).toBe(404);
  });
});
