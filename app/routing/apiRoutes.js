// LOAD DATA
// =============================================================================
var userData = require("../data/friends");

// ROUTING
// ===============================================================================

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log("Getting Friends from API...");
        res.json(friends);
    });

    var comparisonUserTotalScore = 0;
    var friendsScores = [];
    ////////////////////not connecting//////////////////////
    // *** Updates an array of friends "database" array and sends back the json form of the most compatible new friend
    app.post('/api/friends', function (req, res) {
        // newFriend is the user that filled out the survey
        var currentUserScores = req.body.scores;
        console.log("Current user scores: " + currentUserScores);

        //compute user's most compatible friend
        for (var i = 0; i < userData[i].length; i++) {
            //convert user results into an array of numbers
            var compareUserScores = userData[i].scores;

            comparisonUserTotalScore = calculateUserCompatibility(currentUserScores, compareUserScores);

            //build array of user compatibility scores.
            friendsScores.push(comparisonUserTotalScore);
        }
        console.log("Array of friend scores: " + friendScores);

        var index = 0;
        var value = friendScores[0];

        // Need to get index of lowest score.
        // Tried to use Math.min and it return NaN.
        // So went with tried and true vanilla.
        for (var i = 0; i < friendScores.length; i++) {
            console.log("Value of item in array: " + friendScores[i]);
            if (friendScores[i] < value) {
                value = friendScores[i];
                index = i;
            }
        }

        // OMG we are getting a best friend.
        console.log("Best friend name: " + userData[index].name);

        // Send best friend as a response so we can display in modal.
        res.send(userData[index]);

        // Push new user to user array.
        userData.push(req.body);

    });
};

var totalDifference = 0;

// Find total difference between current user and another user.
function calculateUserCompatibilityScore(currentUserScores, comparisonUserScores) {

    // Reset the total difference counter each time function called.
    totalDifference = 0;

    for (var i = 0; i < currentUserScores.length; i++) {

        totalDifference += Math.abs(currentUserScores[i] - comparisonUserScores[i]);
    }

    console.log("Final total difference for friend: " + totalDifference);

    return totalDifference;

};