'use strict';

var express = require('express'),
	config = require('./config'),
	app = express();

// app.set('views', __dirname + '/dashboards');
// app.set('view engine', 'jade');

app.use(express.static('dashboards'));
app.use(express.static('widgets'));
app.use(express.static('node_modules'));
app.use(express.static('js'));
app.use(express.static('css'));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(config.server.PORT, function() {

	console.log('Goodly is started! Go to: http://localhost:%s',config.server.PORT);
	console.log('To terminate it: Ctrl + C');

});