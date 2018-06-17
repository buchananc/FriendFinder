var path = require("path");

// ROUTING
// ===============================================================================

module.exports = function(app) {
    // HTML GET Requests
    // ---------------------------------------------------------------------------
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //if no route is found, default to home
    app.use('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

};