const db = require("../db/queries");

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log('Username: ', usernames);
    res.send("Username: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernameGet(req, res) {
    res.render("form");
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");

    
}

module.exports = {
    getUsernames,
    createUsernameGet,
    createUsernamePost,

}