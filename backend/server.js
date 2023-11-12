const express = require('express');
const app = express();
const pool = require('./db');
const visionModel = require('./ML/ESGModel');

// Make sure you can handle JSON payload in the request body
app.use(express.json({ limit: '50mb' })); // Increase the limit if you expect very large images

// Existing route to get data
app.get('/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM companies');
    res.json(rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.post('/upload-image', async (req, res) => {
  try {
    const base64Image = req.body.image; 
    if (!base64Image) {
      return res.status(400).send({ message: 'No image data provided.' });
    }

    // The 'visionModel' function should be adjusted to accept a base64 string directly.
    const brandObjectRes = await visionModel([base64Image], 'What brand and object is in this image? Give me the S&P Symbol for the brand.');
    
    // Send a response back to the client including the brandObjectRes
    res.status(200).send({ brandObjectRes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
