const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*',
};
const sensorData = JSON.parse(fs.readFileSync('./data.json'));
app.use(cors(corsOptions));

app.get('/sensor', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 12;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const dataBatch = sensorData.slice(startIndex, endIndex);

  res.json(dataBatch);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
