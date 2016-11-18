var connection = require ('./connection.js');


var orm = {
	selectAll: function (cb){
		var selAll = 'SELECT * FROM cnc_users';
		connection.query(selAll, function(err,allRes){
			cb(allRes)
		});
	},
	insertOne: function(value, cb){
		var insOne = "INSERT INTO burgers (burger_name, devouered) VALUES ('"+ value + "', false);";
		connection.query(insOne, function(err,insRes){
			cb(insRes)
		});
	},
	updateOne: function (id, cb) {
		var queryString = "UPDATE burgers SET devouered =true WHERE id=" + id+ ";";
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;