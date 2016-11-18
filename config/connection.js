var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'gc3lmib0mjo9468a',
	password: 'd1jxhv5c957h4r29',
	database: '	3306'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});


module.exports = connection;