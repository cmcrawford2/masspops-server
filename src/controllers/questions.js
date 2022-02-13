import ModelQuestions from '../models/modelQuestions';

const questionsModel = new ModelQuestions('questions');

export const questionsPage = async (req, res) => {
  try {
    const { questionIds } = req.params;

    const data = await questionsModel.select(questionIds);
    res.status(200).json({ questions: data.rows });
  } catch (err) {
    res.status(200).json({ questions: err.stack });
  }
};
