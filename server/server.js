const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

let app = express();
app.get('/', (req, res) => {
    res.send('Hello World')
}) 

app.use(express.json());
app.use(cors()); 
app.use('/api', apiRouter);

app.listen(3000);