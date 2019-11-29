var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      let lowestScore = -1;
      let smallestIndex = -1;
      for (let i=0; i<friendsData.length; i++){
        let scoreDifference = 0;
        for(let j=0; j<10; j++){
          scoreDifference = scoreDifference + Math.abs(friendsData[i].scores[j] - req.body.scores[j]);
        }
        if (lowestScore === -1){
          lowestScore = scoreDifference
          smallestIndex = i;
        }else if (scoreDifference <= lowestScore){
          lowestScore = scoreDifference;
          smallestIndex = i;
        }
        console.log(`score difference ${i} is ${scoreDifference}`);
      }
      friendsData.push(req.body);
      res.json(friendsData[smallestIndex]);
  });
}