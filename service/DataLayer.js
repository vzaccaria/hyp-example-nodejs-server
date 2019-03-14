const sqlDbFactory = require("knex");

let { booksDbSetup } = require("./BookService");

let sqlDb = sqlDbFactory({
  client: "pg",
  connection: process.env.DATABASE_URL,
  ssl: true,
  debug: true
});

function setupDataLayer() {
  console.log("Setting up data layer");
  return booksDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };
