import { pool } from './pool';

class modelQuestionIds {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(pollIdString, questionIdString) {
    const query = `SELECT DISTINCT "Question_ID" FROM ${this.table}
                    WHERE "Poll_ID" IN ${pollIdString}
                    AND "Question_ID" IN ${questionIdString}`;

    return this.pool.query(query);
  }
}

export default modelQuestionIds;
