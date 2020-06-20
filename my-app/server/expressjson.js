const express = require('express')
const app = express()
const port = 4000

app.get('/data', (req, res) => {
    res.sendFile('./MOCK_DATA.json', { root: __dirname })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))