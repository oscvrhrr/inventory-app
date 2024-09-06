const pool = require("./pool");

async function getUsername(username) {
  const { rows } = await pool.query('SELECT * FROM usernames WHERE username LIKE $1', [`%${username}%`])
  console.log(rows)
  return rows
}

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsers() {
  await pool.query('DELETE FROM usernames');
}


module.exports = {
  deleteAllUsers,
  getUsername,
  getAllUsernames,
  insertUsername,
};
