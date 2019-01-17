const db = require('../utils/db');
const jmoment = require('moment-jalaali');

const UserSchema = db.Schema({
	user_name: {
		type: String ,
		unique: true ,
		required: true,
		lowercase: true,
		trim: true
	},
	password:{
		type: String,
		required: true,
		trim: true
	},
	email:{
		type: String,
		unique: true,
	},
	first_name: {
		type: String ,
		lowercase:true
	},
	last_name: {
		type: String ,
		lowercase:true
	},
	account_type: {
		type: Number,
		required: true,
		default: 1,
		enum: [1,2,3]
	}
});

UserSchema.pre('save' , function(next){
	let user = this;
	if(user.isModified('password') || user.isNew){
		
	}
});