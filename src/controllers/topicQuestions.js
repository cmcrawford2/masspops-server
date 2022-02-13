import ModelTopicQuestions from '../models/modelTopicQuestions';

const topicQuestionsModel = new ModelTopicQuestions('questions');

export const topicQuestionsPage = async (req, res) => {
  try {
    const { topicIds } = req.params;

    const data = await topicQuestionsModel.select(topicIds);
    res.status(200).json({ questionIds: data.rows });
  } catch (err) {
    res.status(200).json({ questionIds: err.stack });
  }
};
