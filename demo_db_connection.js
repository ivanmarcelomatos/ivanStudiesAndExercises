var mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost', 
  user: '', 
  password: '', 
  database: 'mydb'
});

con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', con.threadId);

  // Example user input
  const userInput = "Susan";
  
  // Use mysql.escape() to escape the user input
  const escapedInput = mysql.escape(userInput);

  // Use the escaped input in an SQL query
  const sql = `SELECT * FROM customers WHERE name = ${escapedInput}`;

  // Perform the query
  con.query(sql, (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      return;
    }
    console.log('Query results:', results);

    // Close the connection
    con.end((err) => {
      if (err) {
        console.error('Error closing the connection:', err.stack);
        return;
      }
      console.log('Connection closed');
    });
  });
});
