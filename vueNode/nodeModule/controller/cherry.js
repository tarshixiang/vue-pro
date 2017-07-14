const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const sha1 = require('sha1')


const CherryAll = (req, res) => {
	model.Cherry.find({}, (err, doc) => {
		console.log(err,doc)
		if(err) console.log(err)
		if(doc) res.send(doc)
	})
}

module.exports = (router) => {
	router.get('/cherry', CherryAll)
}
