var express = require('express');
var router = express.Router();
var handlers = require('./controllers/handlers');

router.get('/rockstars', handlers.get);

router.getById('/rockstar/:id', handlers.getById);

router.post('/rockstar', handlers.post);

router.put('/rockstar/:id', handlers.put);

router.delete('/rockstar/:id', handlers.delete);

module.exports = router;