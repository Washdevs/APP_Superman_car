import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function criarEPopularTabelaUsuarios(
  nome,
  preco,
  descricao = null,
  qtd_estoque = 0,
  categoria = null,
  fornecedor = null,
  un_de_medida = null,
  cod_barras = null,
  marca = null,
  modelo = null,
  peso = null,
  dimensoes = null,
  garantia = null,
  sku = null,
  desconto = 0.0,
  imposto_aplicado = 0.0,
) {
  const db = await open({
    filename: './banco.db',
    driver: sqlite3.Database,
  });
  db.run(
    `CREATE TABLE IF NOT EXISTS produto (id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome TEXT NOT NULL, descricao TEXT, preco REAL NOT NULL, qtd_estoque INTEGER DEFAULT 0,
    categoria TEXT, fornecedor TEXT, dt_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    dt_update DATETIME DEFAULT CURRENT_TIMESTAMP, un_de_medida TEXT, status TEXT DEFAULT 'ativo',
    cod_barras TEXT UNIQUE, marca TEXT, modelo TEXT, peso REAL, dimensoes TEXT, garantia INTEGER,
    sku TEXT UNIQUE, desconto REAL DEFAULT 0.0, imposto_aplicado REAL DEFAULT 0.0)`,
  );
  db.run(
    `INSERT INTO produto (
      nome, descricao, preco, qtd_estoque, categoria, fornecedor, 
      un_de_medida, cod_barras, marca, modelo, peso, dimensoes, 
      garantia, sku, desconto, imposto_aplicado
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    'Subwoofer 15 JBL',
    'Selenium Tornado 15SWT2200 - 1100 Watts RMS',
    699.9,
    10,
    'Áudio Automotivo',
    'Fornecedor JBL Distribuidora',
    '10 Pol',
    '7891234567890',
    'JBL',
    'Selenium Tornado 15SWT2200',
    5.0,
    '15x15x30 cm',
    12,
    'SUBJBL15P',
    5.0,
    15.0,
  );
  console.log('Tabela criada e dados do produto inseridos com sucesso!');
}

criarEPopularTabelaUsuarios().catch((error) => {
  console.error('Erro ao criar tabela ou inserir dados:', error.message);
});
