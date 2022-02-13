import ModelQuestionIds from '../models/modelQuestionIds';

const questionIdsModel = new ModelQuestionIds('results');

export const questionIdsPage = async (req, res) => {
  try {
    const { pollIds, questionIds } = req.params;

    const data = await questionIdsModel.select(pollIds, questionIds);
    res.status(200).json({ questionIds: data.rows });
  } catch (err) {
    res.status(200).json({ questionIds: err.stack });
  }
};
