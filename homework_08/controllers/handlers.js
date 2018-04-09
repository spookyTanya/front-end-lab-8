const fs = require("fs");
var test = fs.readFileSync('data/storage.json');
var stars = JSON.parse(test);

exports.get = function(req, res){
	res.status(200).send(stars);
}

exports.getById = function(req, res){
	const rock = stars.find(c => c.id==parseInt(req.params.id));
	if(!rock) return res.status(404).send('Not found'); 
	res.status(200).send(rock);
}

exports.post = (req, res) => {
	if(!req.body.name||!req.body.band||!req.body.instrument){
		return res.sendStatus(400).send('All data is required');
	}

	const rocks = stars.find(c => {return c.name==req.body.name});
	if(rocks){
		return res.status(409).send({'message': 'Musician already exist.'});
	}

	const rock = {
		"id": stars.length + 1,
		"name": req.body.name,
		"band": req.body.band,
		"instrument": req.body.instrument
	};

	stars.push(rock);
	res.sendStatus(201).send(rock);
}

exports.put = (req, res) => {
	const rock = stars.find(c => c.id===parseInt(req.params.id));
	if(!rock) return res.status(404).send('Not found'); 
	rock.name = req.body.name;
	rock.band = req.body.band;
	rock.instrument = req.body.instrument; 
	res.status(200).send(rock);
}

exports.delete = (req, res) => {
	const rock = stars.find(c => c.id===parseInt(req.params.id));
	if(!rock) return res.status(404).send('Not found'); 
	const index = stars.indexOf(rock);
	stars.splice(index, 1);
	res.status(200).send({"message": "Musician has been successfully removed."});
}
