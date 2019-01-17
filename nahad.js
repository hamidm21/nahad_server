const http = require('http');
const Routes = require('./routes/index');
const Init = require('./lib/utils/Init');
const PORT = require('./lib/config/config').port;
const express = require('express');
const path = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const debug = require('debug')('nahad:SERVER');
const app = express();
app.server = http.createServer(app);


// view engine setup

app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//initializing

Init(app);
Routes(app);

app.server.listen(PORT || 3000, () => {
	debug(`server is listening on port  ${app.server.address().port}`);
});

module.exports = app;