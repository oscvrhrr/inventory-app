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

async function getUsername(req, res) {
    const usernames = await db.getUsername(req.query);
    console.log('Username: ', usernames);
    res.send("Username: " + usernames.map((user) => user.username).join(", "));
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect("/");

    
}

module.exports = {
    getUsername,
    createUsernameGet,
    createUsernamePost,

}