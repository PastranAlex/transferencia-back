"use strict";

const express = require('express');
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require('cors');
const { routes } = require("./Routes/routes");

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(helmet());

routes(app);

module.exports = app;