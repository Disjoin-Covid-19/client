const express = require('express')
const cors = require('cors');
const app = express()
const port = 4000

app.use(cors());

app.get('/storeInfo/:storeId', (req, res) => {
    res.contentType('application/json');

    var options = {
        root: __dirname,
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
      };

    res.sendFile('data/storeData.json', options);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))