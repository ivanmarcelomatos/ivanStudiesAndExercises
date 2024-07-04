var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT * FROM customers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});