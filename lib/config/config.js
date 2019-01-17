require('dotenv').config();

const config =  {
	port : process.env.PORT ,
	mongo_host : process.env.MONGO_HOST 

};

module.exports = config;