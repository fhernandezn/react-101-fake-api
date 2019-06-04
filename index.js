const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

const PORT = 3000;

app.use(bodyParser.json());
app.use(routes());

app.listen(PORT, () => {
    console.log(`Fake api running on port ${PORT}`)
});