const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "0.0.0.0",
  database: "erupe",
  password: "123",
  port: 5432,
};
const getFirstRowOrderedByName = async () => {
    const query = `SELECT *
			       FROM "users"
			       ORDER BY "name"
			       LIMIT 1;`;
    try {
        await client.connect();  // creates connection
        const { rows } = await client.query(query); // sends query
		console.table(rows);
    } catch (error) {
        console.error(error.stack);
    } finally {
        await client.end();      // closes connection
    }

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;

}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  

})();