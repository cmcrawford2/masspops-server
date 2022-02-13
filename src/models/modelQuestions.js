import { pool } from './pool';

class modelQuestions {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(questionIdString) {
    const query = `SELECT "Question_ID", "Question" FROM ${this.table}
                    WHERE "Question_ID" IN ${questionIdString}`;

    return this.pool.query(query);
  }
}

export default modelQuestions;
