const express = require('express');
const app = express();
const path = require('path');
const cors=require('cors')









app.get('/gltf', (req, res) => {
  const gltfPath = path.resolve(__dirname, 'basic_shirt_2.gltf');
  res.sendFile(gltfPath);
});









app.listen(4000, () => {
  console.log('Server listening on port 4000');
});