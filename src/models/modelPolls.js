import { pool } from './pool';

class ModelPolls {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(pollIdString) {
    const query = `SELECT "poll_id", "pollster", "url" FROM ${this.table}
                   WHERE "poll_id" IN ${pollIdString}`;
    return this.pool.query(query);
  }
}

export default ModelPolls;
