// Installing dependencies
const express = require('express'); // Framework to create HTTP routes
const morgan = require('morgan'); // Middle ware - HTTP request logger for node.js - simplifies logging request
const bodyParser = require('body-parser'); // data reader - for node js to read front end data
const mongoose = require('mongoose'); // mongo db agent - for node js to mongo db communication

// create an instance of express
const app = express();

app.use(bodyParser.json()); // reading data in specific format (json)
app.use(bodyParser.urlencoded({ extended:false })); // urlencoding is false coz we want to read image as raw
app.use(morgan('dev')); // will log all requests in terminal

