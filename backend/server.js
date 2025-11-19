const express = require("express");
const cors = require("cors");
const path = require("path");
const profiles = require("./data/profiles.json");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Rota para devolver os perfis
app.get("/profiles", (req, res) => {
  res.json(profiles);
});

// (opcional) rota de teste
app.get("/", (req, res) => {
  res.send("API do Futuro do Trabalho está rodando.");
});

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
