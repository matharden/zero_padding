var express = require('express')
  , app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.logger('dev'));
app.use(express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8080);