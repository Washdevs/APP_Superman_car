import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors()); // Permitir conexões do front-end
app.use(express.json()); // Para interpretar JSON no body das requisições

// Configuração da conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: "localhost", // Substitua pelo endereço do seu servidor
  user: "root", // Usuário do MySQL
  password: "was123", // Senha do MySQL
  database: "producao", // Nome do banco de dados
});

// Testando a conexão
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL!");
  }
});

// Rota para obter dados do banco
app.get("/dados", (req, res) => {
  db.query("SELECT * FROM produto", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Erro no servidor");
    } else {
      res.json(results);
    }
  });
});

// Configuração do servidor
const PORT = 3001; // Porta do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
