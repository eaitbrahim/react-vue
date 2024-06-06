const express = require('express');
const fs = require('fs');
const app = express();

const temperatureData = JSON.parse(fs.readFileSync('./data.json'));

app.get('/temperature', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const dataBatch = temperatureData.slice(startIndex, endIndex);

  res.json(dataBatch);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
