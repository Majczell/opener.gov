import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;
  const fileData = await axios.get(url as string);
  const buffer = Buffer.from(fileData.data, 'binary');
  res.status(200).send(buffer);
}

export default handler
