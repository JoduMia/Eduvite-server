const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT || 5000;
const datas = require('./data.json');

app.get('/', (req,res) => {
    res.send('Api server running');
})

app.get('/datas', (req, res) => {
    res.send(datas);
})

app.get('/datas/:id',(req,res) => {
    const id = req.params.id;
    console.log(id);
    const data = datas.find(d => d.id === id);
    res.send(data);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})