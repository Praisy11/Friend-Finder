// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendArray = require("../data/friends");
var path = require('path');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
     
    var userData=[];// user input thur survey.html onclick//
    var newFriend=req.body.scores
    var diffArr=[]; //difference between userinput score and friendArray score//
    // final match or new friend//
    
    var matchIndex=0;
    var prevScore=10000000;
    var tempScore;// total score of the friend from friendArray//

    //console.log(userData.scores[0].val());
    // looping thru friendArray//
    for (var i=0;i< friendArray.length; i++){
      tempScore=0;
    // looping thru 10 questions for the current friend in the friendArray//
        for (var j=0; j<newFriend.length; j++){
    
            diffArr[j]=Math.abs(friendArray[i].scores[j]-newFriend[j]);
        
        }
    // looping thru the diff array to find the total score of 10 answers for the current friend in friendArray//
        for (var k=0; k< diffArr.length;k++){
            tempScore=parseInt(tempScore )+ parseInt(diffArr[k]); //sum up of score//
        }
         if (tempScore < prevScore) {
          matchIndex=i;
          prevScore=tempScore;
        }
    
     
    }

    friendArray.push(req.body);

    console.log(req.body)
   // console.log("tempScore :" +tempScore);
   // console.log("prevScore :" +prevScore);
   // console.log("diffArr:" + diffArr);
    res.json(friendArray[matchIndex]);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  
};