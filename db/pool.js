const { Pool } = require("pg");

module.exports = new Pool ({
    host: "localhost",
    user: "oscarherrera",
    database:"top_users",

    port: 5432
}
)