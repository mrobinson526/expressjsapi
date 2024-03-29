const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');
const path = require('path');

let app = express();

app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/api', apiRoutes);

app.listen(3000);