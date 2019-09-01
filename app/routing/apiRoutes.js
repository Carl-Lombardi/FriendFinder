const players = require("../data/players.js");

module.exports = function(app) {
  app.get("/api/players", function(req, res) {
    res.json(players);
  });

  app.post("/api/players", function(req, res) {
    let totalDifference = 0;

   const bestMatch = {
      name: "",
      photo: "",
      playerDifference: 1000
    };

//convert to a number instead of a string

    let userData = req.body;
    let userName = userData.name;
    let userScores = userData.scores;

    const b = userScores.map(function(item) {
      return parseInt(item, 10);
    });
    userData = {
      name: req.body.name,
      photo: req.body.photo,
      scores: b
    };

    console.log("Name: " + userName);
    console.log("User Score " + userScores);

    //reduce array arrow function
    const sum = b.reduce((a, b) => a + b, 0);

    console.log("Sum of users score " + sum);
    console.log("Best match player diff " + bestMatch.playerDifference);
    console.log("+++++++=================++++++++++");

    //loop through all players in database
    for (let i = 0; i < players.length; i++) {
      console.log(players[i].name);
      totalDifference = 0;
      console.log("Total Diff " + totalDifference);
      console.log("Best match player diff " + bestMatch.playerDifference);

      const bplayerscore = players[i].scores.reduce((a, b) => a + b, 0);
      console.log("Total player score " + bplayerscore);
      totalDifference += Math.abs(sum - bplayerscore);
      console.log("-------------------------> " + totalDifference);

      //sum differences/ determine best match for players
      if (totalDifference <= bestMatch.playerDifference) {
        bestMatch.name = players[i].name;
        bestMatch.photo = players[i].photo;
        bestMatch.playerDifference = totalDifference;
      }
      console.log(totalDifference + " Total Difference");
    }
    console.log(bestMatch);
//save users data to db and return json with users best match
    players.push(userData);
    console.log("New user added");
    console.log(userData);
    res.json(bestMatch);
  });
};