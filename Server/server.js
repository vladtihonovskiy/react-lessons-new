import config from "./config/config";

const path = require('path');

import usersRouter from "./routers/users";

var docs = require("express-mongoose-docs");

const bodyParser = require('body-parser');

const cors = require('cors');

const express = require('express');

// const DatabaseObject = new Database();

const app = express();

const originUrl = '*'; // 'https://warm-stream-11016.herokuapp.com';
const port = process.env.PORT || config.port;


app.use(cors({ origin: originUrl }));
app.use(bodyParser.json());


const build = path.resolve(__dirname, '../dist');

app.use('/', express.static(build));
app.get('*', function (req, res) { res.sendFile(path.resolve(build, 'index.html')); }); // eslint-disable-line prefer-arrow-callback

// app.use('/api', authRouter);

app.use('/api', usersRouter);
app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
