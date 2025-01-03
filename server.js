import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const db = new sqlite3.Database('./branco.db');

// Servir arquivos estáticos
app.use(express.static('public'));

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
