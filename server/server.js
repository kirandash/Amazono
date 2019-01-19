// Installing dependencies
const express = require('express'); // Framework to create HTTP routes
const morgan = require('morgan'); // Middle ware - HTTP request logger for node.js - simplifies logging request
const bodyParser = require('body-parser'); // data reader - for node js to read front end data
const mongoose = require('mongoose'); // mongo db agent - for node js to mongo db communication
const cors = required('cors'); // Middle ware - for Front end and back end communication

const config = require('./config');// including local file

// create an instance of express
const app = express();

mongoose.connect(config.database, err => {
    if(err){
        console.log(err);
    }else{
        console.log('Connected to the database');
    }
}); // function to connect to mongodb database

app.use(bodyParser.json()); // reading data in specific format (json)
app.use(bodyParser.urlencoded({ extended:false })); // urlencoding is false coz we want to read image as raw
app.use(morgan('dev')); // will log all requests in terminal
app.user(cors());

app.get('/', (req, res, next) => {
    res.json({
        user: 'Kiran Dash'
    });
}); // using http get at '/' or the home page i.e. 'localhost:3030/' to get a json response data

app.listen(config.port, err => {
    console.log('Magic happened at port ' + config.port);
});