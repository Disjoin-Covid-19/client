const express = require('express')
const app = express()
const port = 4000

app.get('/data', (req, res) => {
    res.sendfile('./MOCK_DATA.json')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))