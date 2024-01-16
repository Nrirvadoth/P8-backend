require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/routes')
const app = express();
const path = require('path')


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true})
.then(console.log("mongodb connected successfully...."))
.catch(err =>console.log(err));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/', apiRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;