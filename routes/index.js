const User = require('./User');

module.exports = app => {
	app.use('/User' , User);
};