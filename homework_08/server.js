process.stdout.write('What are you waiting for? \n');
const fs = require("fs");
const express = require('express');
const app = express();
app.use(express.json());
var controller = require('./controllers/handlers.js');
const port = process.env.PORT||3001;

app.get('/rockstars', controller.get);

app.get('/rockstar/:id', controller.getById);

app.post('/rockstar', controller.post);

app.put('/rockstar/:id', controller.put);

app.delete('/rockstar/:id', controller.delete);

app.listen(port, () => console.log(`Listening to port ${port}`));

