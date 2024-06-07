const WebSocket = require('ws');
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
  const pageSize = 10;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const totalRecords = sensorData.length;
  const totalPages = Math.ceil(totalRecords / pageSize);

  const dataBatch = sensorData.slice(startIndex, endIndex);

  res.set('x-total-pages', totalPages);

  res.json(dataBatch);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const wss = new WebSocket.Server({ port: 8080 });
function generateRandomData(sensorId) {
  const reading = Math.random() * 200 - 100;
  const batteryLevel = Math.floor(Math.random() * 101); 
  return { SensorId: sensorId, reading, batteryLevel, readingDateTime: Date.now() };
}

function broadcastRandomData() {
  sensorData.forEach(sensor => {
    const data = generateRandomData(sensor.SensorId);
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });
}

setInterval(broadcastRandomData, 15000);
wss.on('listening', () => {
  console.log('WebSocket server is running on port 8080');
});