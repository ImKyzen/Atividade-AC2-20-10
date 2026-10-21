# API de Professores

## Descrição

API REST desenvolvida com Node.js e Express para gerenciar professores e suas respectivas turmas.

A API permite listar professores, buscar por ID, atualizar informações, adicionar turmas, consultar professores por departamento e remover professores.

Os dados são armazenados em memória utilizando arrays e objetos JavaScript, sem banco de dados.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Postman para testar as requisições HTTP

## Requisitos

- Node.js e npm instalados.
- Postman (opcional, para testar os endpoints).

## Como executar o projeto

1. Abra o terminal na pasta raiz do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   node app.js
   ```

4. O servidor estará disponível em:

   ```text
   http://localhost:3000
   ```

## Endpoints disponíveis

| Método HTTP | Endpoint | Descrição |
|---|---|---|
| GET | `/professores` | Lista todos os professores |
| GET | `/professores/:id` | Busca um professor por ID |
| GET | `/professores/:id/turmas` | Lista as turmas de um professor |
| PUT | `/professores/:id` | Atualiza os dados de um professor |
| POST | `/professores/:id/turmas` | Adiciona uma turma a um professor |
| GET | `/professores/departamento/:departamento` | Lista professores por departamento |
| DELETE | `/professores/:id` | Remove um professor |

## Testes

As requisições podem ser testadas pelo Postman. Utilize a URL base `http://localhost:3000`, selecione o método HTTP correspondente e, quando necessário, envie os dados no formato JSON em **Body → raw → JSON**.

## Armazenamento dos dados

Os dados são mantidos em memória durante a execução da aplicação. Ao reiniciar o servidor, as alterações realizadas são perdidas e os dados retornam à configuração inicial.
