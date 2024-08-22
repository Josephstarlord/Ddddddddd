const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

// routes
app.get('/api/gpt4o', async (req, res) => {
  try {
    const prompt = req.query.context;
    const response = await axios.get(`https://c-v1.onrender.com/api/bard?prompt=${prompt}`);
    res.json({ answer: response.data.answer });
  } catch (error) {
    res.status(500).json({ error: 'No Response from Aesther 😭' });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
