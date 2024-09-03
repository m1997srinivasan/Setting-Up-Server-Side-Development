// syntax for import Express App
const express = require("express");

//setting up Express js
const app = express();

const PORT = 7030;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello user! Welcome to Express JS")
});

app.get('/app', (req, res) => {
    res.send("Please given Your Name:");
});

app.get('/app/data', (req, res) => {
    res.json( { message: 'Hey have a nice day!' });
});

app.post('/app', (req, res) => {
    res.json( { message: 'Hey! Welcome to Dashboard'});
});

app.patch('/app', (req, res) => {
    res.send("Deep dive into your ExpressJS Journey!")
});

app.delete('/app', (req, res) => {
    res.json( { message: 'Hey! Please Delete your Unauthorised Database'});
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})