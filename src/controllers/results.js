import ModelResults from '../models/modelResults';

const resultsModel = new ModelResults('results');

export const resultsPage = async (req, res) => {
  try {
    const { questionIds } = req.params;
    const data = await resultsModel.select(questionIds);
    res.status(200).json({ results: data.rows });
  } catch (err) {
    res.status(200).json({ results: err.stack });
  }
};
