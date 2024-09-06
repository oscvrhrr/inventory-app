const { render } = require("ejs");
const db = require("../db/queries");

async function createUsernameGet(req, res) {
   const username = req.query.search;
   if(username && username.trim() !== '') {
       const result = await db.getUsername(username);
       res.render('index', { result });
   } else {
        res.render('index', { result: [] });
   }

}

async function getUsernames(req, res) {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  }

async function getFormGet(req, res) {
    res.render('form');
}   

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');

}

async function deleteAllUsernames(req, res) {
    await db.deleteAllUsers();
    res.redirect('/');
}


module.exports = {
    deleteAllUsernames,
    getUsernames,
    createUsernameGet,
    createUsernamePost,
    getFormGet,

}