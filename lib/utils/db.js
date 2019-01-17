const mongoose = require('mongoose');
const db_log = require('debug')('nahad:DB');
const mongo_host = require('../config/config').mongo_host;

mongoose.connect(mongo_host , ()=>{
	db_log('monodb is connected');
});

mongoose.connection.on('connected' , ()=>{
	db_log('monodb is connected to %s' , mongo_host);
});

mongoose.connection.on('error' , (error)=>{
	db_log('monodb has error %s' , error);
});

mongoose.connection.on('disconnected' , ()=>{
	db_log('monodb is disconnected');
});

process.on('SIGINT' , ()=>{
	mongoose.connection.close(()=>{
		db_log('mongodb is disconnected through app termination');
		process.exit(0);
	});
});

module.exports = mongoose;