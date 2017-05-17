// API Routes
var dataArray = require("app/data/friends");
var path = require("path");

module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendData);
  }); // Get data 

  app.post("/api/friends", function(req, res) {
  	if () {

  	}

  	else {

  	}

  }); // Post data

}


// app.post("/api/clear", function() {
//     // Empty out the arrays of data
//    friendData = [];
//     console.log(tableData);
//   });
// };
