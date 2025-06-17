// routes/JudgeRouter.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.post('/run', async (req, res) => {
  const { code, language, input } = req.body;

  const languageMap = {
    javascript: 63,
    python: 71,
    cpp: 54,
    c: 50,
    java: 62,
  };

  const languageId = languageMap[language.toLowerCase()];
  if (!languageId) return res.status(400).json({ error: 'Unsupported language' });

  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
      {
        source_code: Buffer.from(code).toString('base64'),
        language_id: languageId,
        stdin: Buffer.from(input || '').toString('base64'),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        },
      }
    );

    const result = response.data;
    res.status(200).json(result);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to run code' });
  }
});

module.exports = router;
