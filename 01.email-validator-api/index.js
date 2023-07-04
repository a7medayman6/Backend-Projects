const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

// load env variables
dotenv.config();

// create an express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));


// constants
const apiBaseUrl = '/api/v1';

// api routes
app.use(`${apiBaseUrl}/validate`, require('./routes/email'));

// start the server
app.listen(PORT, () => 
{
    console.log(`Server running on port ${PORT}`);
});