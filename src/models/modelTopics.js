import { pool } from './pool';

class ModelTopics {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select() {
    const query = `SELECT * FROM ${this.table}`;
    return this.pool.query(query);
  }
}

export default ModelTopics;
