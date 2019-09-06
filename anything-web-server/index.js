const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const mongoose = require('mongoose');



// Config
const configMongo = require('./config/mongo');


const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./routes/user/user');
routes(app);

// app.listen(port);

mongoose.connect(configMongo.url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    // print database name
    console.log("db object points to the database : " + db.databaseName);
    // after completing all the operations with db, close it.
    // db.close();
});

mongoose.connection.once('open', function () {
    console.log("Successfully connected to the database mongo");
    app.listen(port, () => {
        console.log("API is listening on http://127.0.0.1:" + port + "  !");
    });
});



process.on('uncaughtException', function(e) {
    console.log('--- CAUGHT BY EVENT ---');
    console.log(e);
});
