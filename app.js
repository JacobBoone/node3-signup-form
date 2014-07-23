var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var findSuccess = {}

app.get('/', function(req, res) {
	res.render('index', {
		redirectData: findSuccess
	});

});



app.get('/success', function(req, res) {
	res.send('<h1>Success!</h1>')
});



app.post('/formsubmit', function(req, res){
	var postedData = req.body;
	res.redirect('/success')

});





var server = app.listen(6840, function() {
	console.log('Express server listening on port ' + server.address().port);
});
