// pages/api/translate.js

import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { file } = req.query;

  if (!file) {
    return res.status(400).json({ error: 'File path is required' });
  }

  const filePath = path.join(process.cwd(), file);

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    res.status(200).send(fileContent);
  } catch (error) {
    console.error('Error reading file:', error);
    res.status(500).json({ error: 'Failed to read file' });
  }
}
