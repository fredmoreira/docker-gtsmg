var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Express
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
        res.send('API DEMONSTRAÇÃO DOCKER-UAITEST VERSÃO 1.0.0');
    });

// Inicia o servidor na porta 5000
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function(err) {
	if (err) {
		return console.error(err);
	}
	console.info('Express server listening on port: %d', server.address().port);
});