
var express = require('express');
var app = express();

app.get('/', function(req, res) {
        res.send('API DEMONSTRAÇÃO COMUNIDADE DE TESTE MG VERSÃO 1.0.0');
    });

// Inicia o servidor na porta 5000
app.set('port', process.env.PORT || 5000);

var server = app.listen(app.get('port'), function(err) {
	if (err) {
		return console.error(err);
	}
	console.info('Express server listening on port: %d', server.address().port);
});