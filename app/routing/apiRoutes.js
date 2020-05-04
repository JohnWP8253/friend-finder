// ===============================================================================
// LOAD DATA
// ===============================================================================
var myFriends = require("../data/friends");

module.exports = function (app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function (req, res) {
    res.json(myFriends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    // receive user details as parameters sent from client-side as part of POST request, e.g. (name, photo, scores)
    var user = req.body;

    // loops through and changes scores from strings to integers
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but results will be whoever has the minimum difference in scores
    var bestMatchIndex = 0;
    var minimumDifference = 40;

    // for-loop to start off with zero difference and compate user with existing friend scores, one at a time
    // add difference to total difference
    for (var x = 0; x < myFriends.length; i++) {
      var totalDifference = 0;
      for (var y = 0; y < myFriends[x].scores.length; y++) {
        var difference = Math.abs(user.scores[y] - myFriends[x].scores[y]);
        totalDifference += difference;
      }
      // if there is a new minimum, change the best match index and set the new minimum for the next iteration comparisons
      if (totalDifference < minimumDifference) {
        bestMatchIndex = x;
        minimumDifference = totalDifference;
      }
    }

    myFriends.push(user);

    res.json(myFriends[bestMatchIndex]);
  });
};
