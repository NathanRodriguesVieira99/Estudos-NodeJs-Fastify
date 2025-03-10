describe("Create Book", () => {
  it("POST to /books should return 201", async () => {
    const body = {
      title: "O Senhor dos Anéis: O Retorno do Rei",
      author: "J.R.R Tolkien",
      description: "O terceiro livro da saga",
    };
    const response = await fetch("http://localhost:3333/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    expect(response.status).toBe(201);
  });
});
