import { sqlite3 } from 'sqlite3';
import { open } from 'sqlite3';

async function criarEPopularTabelaUsuarios() {
  const db = await open({
    filename: './banco.db',
    driver: sqlite3.driver,
  });
}
