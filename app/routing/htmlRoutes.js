// HTML Routes

var path = require("path");

module.exports = function (app) {

app.get("/survey", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "../public/survey.html"));		// Survey Route
});

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));      // dEFAULT Route 
}); // This is the default page/path fro anything no defined above  
    // it.


} // End Module Exports
