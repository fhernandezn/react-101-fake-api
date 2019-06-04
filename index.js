const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const routes = require('./routes');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes());

app.listen(PORT, () => {
    console.log(`Fake api running on port ${PORT}`)
});