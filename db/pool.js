const { Pool } = require("pg");

module.exports = new Pool ({
    host: "localhost",
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT
}
)