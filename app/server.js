const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const path = require('path');



app.use(express.static('../tempClient')) // Works locally, untested on heroku

// app.use(express.static(path.join(__dirname, '../tempClient'))); // Works locally, untested on heroku

app.get('*', (req, res) => {
    res.sendFile('tempClient/index.html');
})

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// })


app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})