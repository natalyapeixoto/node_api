var alunas = require('../model/alunas.json')

exports.get = (req, res) => {
	console.log(alunas)
	res.status(200).send(alunas)
}
exports.getById = (req, res) => {
	let id = req.params.id
	res.status(200).send(alunas.filter(item => item.id == id))
}

exports.post = (req, res) => {
	const hobbies = []
	let id = req.params.id
	let hobbie = req.params.hobbie
	hobbies.push(hobbie)
	alunas.filter(item => item.id == id)[0].hobbies = hobbies
	res.status(201).send(alunas.filter(item => item.id == id))
}
