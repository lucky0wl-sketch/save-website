var connectionString = "postgres://brody:123@erupe/127.0.0.1:5432/erupe";
var pgClient = new pg.Client(connectionString);
pgClient.connect();
var query = pgClient.query("SELECT username from users where name = 'Lucky0wl'");
query.on("row", function(row,result){

result.addRow(row);

});

