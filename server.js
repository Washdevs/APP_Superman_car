import express from 'express';
import sqlite3 from 'sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Criação manual de __dirname para ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const db = new sqlite3.Database('./banco.db');

// Servir arquivos estáticos no mesmo diretório
app.use(express.static(__dirname));

// Endpoint para buscar produtos
app.get('/produtos', (req, res) => {
  const sql = 'SELECT nome, preco, qtd_estoque, marca FROM produto';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
