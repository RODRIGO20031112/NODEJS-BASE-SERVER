// server.js
import express from "express";
import bodyParser from "body-parser";
import itemRoutes from "./src/routes/itemRoutes.js";

const app = express();
const PORT = 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Rotas
app.use("/itens", itemRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
