const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://omnistack:3vounptod@cluster0-1y2e0.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);