const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/taskRouter');
const app = express();

app.set('port', process.env.PORT || 3008);
app.use(cors());
app.use('/api', router);
app.use(express.json());

module.exports = app;