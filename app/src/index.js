const express = require('express');
const app = express();
const db = require('./persistence');

const user = {
    id:1,
    name: "koji",
    age: 43,
};

const circle = require('./circle.js');

const port = 3000;

console.log(`The area of a circle of radius is ${circle.area(3)} `);
console.log(`circumference is ${circle.circumference(4)}`);
console.log(`edit`);


const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.get('/items', getItems);
app.post('/items', addItem);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

app.get('/user', (req, res) => {
    res.json(user);
} );

app.get('/about', (req, res) => {
    res.send('About my page ')
});

app.get('/info', (req, res) => {
    res.send('Infomation ')
})

db.init().then(() => {
    app.listen(port, () => console.log(`Example app Listening on port ${port}`));
}).catch((err) => {
    console.error(err);
    process.exit(1);
});

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
