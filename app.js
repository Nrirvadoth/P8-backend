const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/routes')
const app = express();
const path = require('path')

mongoose.connect('mongodb+srv://mathurinmalandain:764G8rRa82HIPLpj@cluster0.iffihzw.mongodb.net/?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true})
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
/* app.use('/images', express.static(path.join(__dirname, 'images'))); */

module.exports = app;