import { pool } from './pool';

class ModelDistinct {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(columns, clause) {
    let query = `SELECT DISTINCT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }
}

export default ModelDistinct;
