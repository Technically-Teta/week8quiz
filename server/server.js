const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/api', (req, res) => {
  res.json({ message: 'From the Makers of Samelias other projects!' }); 
});



app.get('/getinfo/', async (req, res) => {
const response = await fetch('https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple');
const data = await response.json();
console.log(data);
res.json(data);
});


  
app.listen(port, () => {
  console.log(`Server now listening on port ${port}!`);
});