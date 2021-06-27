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

//=============================================
//=============================================

//=========spinning up the server=============
app.listen(port, () => {
  console.log(`Graham's Suite Studios App is live at http://localhost:${port}`);
});