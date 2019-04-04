const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Post = require('./database/models/Post');

const app = new express();
 
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', __dirname + '/views');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.get('/', (req, res) => {
    res.render('index');
});
 
app.get('/posts/new', (req, res) => {
    res.render('create')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));