const mongoose = require('mongoose')
const config = require('../util/util.js')

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

var shopScheme = mongoose.Schema({
	name:String,
	price:String,
	number:String,
	create_time:Date
}, { collection  :'shopcar' })


var model = {
	// 在此处扩展 model，例如：
	Shopcar: mongoose.model('Shopcar',shopScheme)
}

module.exports = model
