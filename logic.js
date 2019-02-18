
var userData=[];// user input//

var diffArr=[]; //difference between userinput score and friendArray score//
// final match or new friend//
var closeMatch={  
    name:'',
    score:0
}
var tempScore=0;// total score of the friend from friendArray//

// looping thru friendArray//
for (var i=0;i< friendArray.length; i++){
// looping thru 10 questions for the current friend in the freidn array//
    for (var j=0; j<10; j++){

        diffArr[j]=math.abs(friendArray.scores[j]-userData.scores[j]);
    
    }
// looping thru the diff array to find the total score of 10 answers for the current friend in friendArray//
    for (var k=0; k< diffArr.length;k++){
        tempScore+=tempScore + diffArr[k]; //sum up of score//
    }
    if (i === 0){
    closeMatch.name = friendArray[i].name;
    closeMatch.score=tempScore;
    }
    else if (tempScore < closeMatch.score) {
        closeMatch.name = friendArray[i].name;
        closeMatch.score=tempScore;
    }

}