# Como Testar as Requisições

## GET todos os itens:

- **URL:** `http://localhost:3000/itens`
- **Método:** GET

## GET um item específico:

- **URL:** `http://localhost:3000/itens/1`
- **Método:** GET

## POST um novo item:

- **URL:** `http://localhost:3000/itens`
- **Método:** POST
- **Corpo da requisição (JSON):**

```json
{
  "name": "Novo Item"
}
```

## PUT para atualizar um item:

- **URL:** `http://localhost:3000/itens/1`
- **Método:** PUT
- **Corpo da requisição (JSON):**

```json
{
  "name": "Item Atualizado"
}
```

## DELETE um item:

- **URL:** `http://localhost:3000/itens/1`
- **Método:** DELETE

## Considerações

- Use uma ferramenta como Postman ou cURL para testar as requisições.
- Certifique-se de que o servidor está rodando antes de fazer as requisições.
- Esta estrutura é simples e pode ser expandida conforme a complexidade do seu projeto aumenta.
