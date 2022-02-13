import { pool } from './pool';

class ModelPollIds {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(questionIdString) {
    const query = `SELECT DISTINCT "Poll_ID" FROM ${this.table}
                   WHERE "Question_ID" IN ${questionIdString}`;
    return this.pool.query(query);
  }
}

export default ModelPollIds;
