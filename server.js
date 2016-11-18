// =============================================================
// DEPENDENCIES
// =============================================================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// =============================================================
// GLOBAL VARIABLES
// =============================================================
var PORT = process.env.PORT || 4000;
var app = express();

// =============================================================
// USE A STATIC ADDRESS FOR LOCAL PACKAGES
// =============================================================
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(process.cwd() + '/public'));

// =============================================================
// USE MIDDLEWARE
// =============================================================
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// =============================================================
// ROUTES
// =============================================================
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// =============================================================
// LISTENING
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
