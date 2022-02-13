import ModelPolls from '../models/modelPolls';

const pollsModel = new ModelPolls('polls');

export const pollsPage = async (req, res) => {
  try {
    const { pollIds } = req.params;
    const data = await pollsModel.select(pollIds);
    res.status(200).json({ polls: data.rows });
  } catch (err) {
    res.status(200).json({ polls: err.stack });
  }
};
