import { pool } from './pool';

class ModelTopicQuestions {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on('error', (err, client) => `Error, ${err}, on idle client${client}`);
  }

  async select(topicIdString) {
    const query = `SELECT "Question_ID" FROM ${this.table}
                    WHERE topic_id IN ${topicIdString}`;

    return this.pool.query(query);
  }
}

export default ModelTopicQuestions;
