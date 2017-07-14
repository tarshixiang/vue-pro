var jwt = require('jsonwebtoken');
module.exports = function(req,res,next){

	let token  = req.headers['authorization'].split(' ')[1]

	let decoded = jwt.decode(token , 'secret')

	if(token && decoded.exp <= Date.now() / 1000 ){
		return res.json({
			code:401,
			message:'token 过期，请重新登录'
		})
	}
	next();
}

