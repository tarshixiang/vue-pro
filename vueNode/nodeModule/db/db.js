const mongoose = require('mongoose')
const config = require('../util/default.js')

// mongodb 连接🔗
// mongodb://localhost/kk
mongoose.connect(config.mongodb)
// mongoose.connect('mongodb://localhost/kk')
// console.log(config.mongodb)
// 此处防止 node.js - Mongoose: mpromise 错误
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
	console.log('Mongodb started successfully')
})

var userSchema = mongoose.Schema({
	email: String,
	password: String,
	recheck: String,
	token: String,
	create_time: Date
})
var cherrySchema = mongoose.Schema({
	name: String,
	type: String
}, { collection: 'cherry' })

var shopScheme = mongoose.Schema({
	name:String,
	price:String,
	number:String,
	create_time:Date
}, { collection  :'shopcar' })


var model = {
	// 在此处扩展 model，例如：
	User: mongoose.model('User', userSchema),
	Cherry: mongoose.model('Cherry', cherrySchema),
	Shopcar: mongoose.model('Shopcar',shopScheme)
}

module.exports = model
