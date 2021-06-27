const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const path = require("path");
const cors = require("cors");

//=====================
//     Middleware
//=====================
app.use(express.json()); // => req.body
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(cors());

//=====================
//       Routes
//=====================
app.get('/tweets', (req, res) => {
  axios({
    method: 'get',
    url: 'https://api.kanye.rest',
  })
  .then((response) => {
    res.status(200).send(response.data);
  })
  .catch((err) => {
    res.status(404).send('Error with get request');
  });
});

//=============================================
//=============================================

//=========spinning up the server=============
app.listen(port, () => {
  console.log(`Graham's Suite Studios App is live at http://localhost:${port}`);
});