//const user_model = require('../models/user_model');


exports.saveUser = async (req, res, next) =>{
	const {} = req.body;
	try{
		res.json(Object.assign(req.base, {
			message: 'fuck u',
			data : {foo : 'bar', baz:85},
			plus : 5
		}));
	}catch(e){
		next(new Error('error in save user'));
	}
};

