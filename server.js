import express from 'express';
import sqlite3 from 'sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // Criação manual de __dirname para ES modules

const app = express();
const db = new sqlite3.Database('./banco.db');

// Configurar EJS como motor de template
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));  // Diretório onde os arquivos EJS estão

// Servir arquivos estáticos no mesmo diretório
app.use(express.static(__dirname));

// Endpoint para buscar um produto e renderizar com EJS
app.get('/produtos', (req, res) => {
  const sql = 'SELECT id, nome, preco, qtd_estoque, marca, imagem FROM produto';
  db.all(sql, [], (err, rows) => {
    if (err) {
      res.status(500).send('Erro ao buscar produtos');
    } else {
      res.render('BuscaProdutos', { produtos: rows }); // Renderiza o arquivo EJS
    }
  });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
