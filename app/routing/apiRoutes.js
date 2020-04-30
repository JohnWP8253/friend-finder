// ===============================================================================
// LOAD DATA
// ===============================================================================
var friends = require("../data/friends");

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // receive user details (name, photo, scores)


}