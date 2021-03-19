const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api/comic', async (req, res) => {
    const response = await fetch('https://xkcd.com/info.0.json',  {
        method: 'GET'
    });
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Running at port :${PORT}`);
});
