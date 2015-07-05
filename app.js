'use strict';

var express = require('express'),
	config = require('./config'),
	_ = require('lodash'),
	fs = require('fs'),
	app = express();

app.set("view options", {layout: false});

app.use(express.static('public'));
app.use(express.static('common'));
app.use(express.static('node_modules'));

app.get('/:dashboard', function(req, res) {
	var dasboardNames = fs.readdirSync('./public/dashboards');
	var isExist = _.includes(dasboardNames, req.params.dashboard + ".html");
	if(!isExist){
		res.send('Dashboard ' + req.params.dashboard + ' does not exist!');
		return;
	}
	var template = fs.readFileSync('./common/index.html');
	res.write(template);
	res.end();
});

app.listen(config.server.PORT, function() {

	console.log('Goodly is started! Go to: http://localhost:%s',config.server.PORT);
	console.log('To terminate it: Ctrl + C');

});