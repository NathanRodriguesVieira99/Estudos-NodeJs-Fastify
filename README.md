## Minha primeira API REST em NodeJs com Typescript, Fastify, Prisma e PostgreSQL

Este projeto foi seguindo um tutorial onde tive contato com essas tecnologias, onde basicamente é um CRUD que permite adicionar, editar , listar e deletar livros. Possuindo validações com zod e conexão com banco de dados. Esse foi meu primeiro contato, estou iniciando meus estudos e espero evoluir... conto com dicas e sugestões!!

### Instalação

1- Verifique se possui o NodeJs instalado.

2- Clone este repositório.

3- execute o comando `npm install` para adicionar as dependências necessárias.

### Endpoints

##### Listar todos os livros

- Método `GET`
- Rota: `/books`
- Descrição: Retorna uma lista com todos os livros cadastrados


##### Listar um livro

- Método `GET`
- Rota: `/books/:bookId`
- Descrição: Retorna um único livro com base no ID
-

##### Adicionar um livro

- Método `POST`
- Rota: `/books/:bookId`
- Descrição: Adiciona um livro no banco de dados
- Parâmetros do body:
  - `title` (string): Título do livro.
  - `author`(string): Autor do livro.
  - `description`: (string): Descrição do livro

##### Deletar um livro

- Método `DELETE`
- Rota `/books/:bookId`
- Descrição: Deleta um livro com base no ID

#### Atualizar um Livro

- Método `PATCH`
- Rota: `/books/:bookId`
- Descrição: Atualiza os dados do livro com base no ID
- Parâmetros do body:
  - `IsReading`(boolean): indica se o livro está sendo lido.
  - `IsFavorite`(boolean): indica se o livro é favorito
  - `IsFinished`(boolean): indica se o livro foi concluído
