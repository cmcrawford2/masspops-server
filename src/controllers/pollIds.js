import ModelPollIds from '../models/modelPollIds';

const pollIdsModel = new ModelPollIds('results');

export const pollIdsPage = async (req, res) => {
  try {
    const { questionIds } = req.params;
    const data = await pollIdsModel.select(questionIds);
    res.status(200).json({ pollIds: data.rows });
  } catch (err) {
    res.status(200).json({ pollIds: err.stack });
  }
};
