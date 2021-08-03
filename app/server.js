const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const path = require('path');

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

app.use(express.static('../tempClient')) // Works locally, untested on heroku

// app.use(express.static(path.join(__dirname, '../tempClient'))); // Works locally, untested on heroku

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})