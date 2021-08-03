const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const path = require('path');


app.use(express.static(path.join(__dirname, '../tempClient/build')));

// app.use(express.static('../tempClient')) // Works locally, untested on heroku

// app.use(express.static(path.join(__dirname, '../tempClient'))); // Works locally, untested on heroku

// app.get('*', (req, res) => {
//     res.sendFile('tempClient/index.html');
// })  // Did not work in heroku - Internal Server Error

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../tempClient/build', 'index.html'));
}) // This works in heroku


app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})