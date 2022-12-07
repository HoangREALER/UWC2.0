const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());

app.use(routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server starts at: " + PORT))