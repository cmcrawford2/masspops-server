import ModelTopics from '../models/modelTopics';

const topicsModel = new ModelTopics('topics');

export const topicsPage = async (req, res) => {
  try {
    const data = await topicsModel.select();
    res.status(200).json({ topics: data.rows });
  } catch (err) {
    res.status(200).json({ topics: err.stack });
  }
};
