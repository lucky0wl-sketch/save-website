const { Pool, Client } = require("pg");

const credentials = {
  user: "postgres",
  host: "0.0.0.0",
  database: "erupe",
  password: "123",
  port: 5432,
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  await pool.end();

  return now;

}

// Use a self-calling function so we can use async / await.

(async () => {
    const getUsers = (request, response) => {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
         if (error) {
          throw error
         }
         response.status(200).json(results.rows)
        })
       }
  


})();