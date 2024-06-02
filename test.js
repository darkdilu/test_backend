const express = require('express');
const app = express();
const path = require('path');
const cors=require('cors')
const { GLTFLoader } = require('three-gltf-loader');
 //const loader = new GLTFLoader();
app.use(cors())




const boxMesh = {
  "geometry": {
    "type": "mesh",
    "vertices": [
      -1, -1, -1,
      1, -1, -1,
      1, 1, -1,
      -1, 1, -1,
      -1, -1, 1,
      1, -1, 1,
      1, 1, 1,
      -1, 1, 1
    ],
    "indices": [
      0, 1, 2,
      2, 3, 0,
      4, 5, 6,
      6, 7, 4,
      0, 4, 5,
      5, 1, 0,
      2, 6, 7,
      7, 3, 2
    ]
  },
  "materials": [
    {
      "name": "box-material",
      "type": "basic",
      "color": [0.5, 0.5, 0.5]
    }
  ]
};



app.get('/gltf', (req, res) => {
  const gltfPath = path.resolve(__dirname, 'basic_shirt_2.gltf');
  res.sendFile(gltfPath);
});
app.get('/gltf2', (req, res) => {
  const gltfPath = path.resolve(__dirname, 'muza5.gltf');
  res.sendFile(gltfPath);
});







{/*  
app.get('/gltf2', async (req, res) => {
  try {
    const gltfPath = path.resolve(__dirname, 'muza5.gltf');
    const gltfData = await fs.readFile(gltfPath, 'utf-8');
    console.log('GLTF data:', gltfData);
    res.send(gltfData);
  } catch (error) {
    console.error('Error reading GLTF file:', error);
    res.status(500).send('Error reading GLTF file');
  }
});
*/}
app.get('/box-mesh', (req, res) => {
  res.json(boxMesh);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});