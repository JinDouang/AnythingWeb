const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/alive')
routes(app);

app.listen(port);


console.log('API is listening on http://127.0.0.1:' + port);