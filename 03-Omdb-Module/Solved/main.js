// import our omdb module/constructor
var Omdb = require("./omdb.js");

// create a new instance of omdb, passing in our api key
var omdb = new Omdb("YOUR_KEY_HERE");

// run the search method, including a callback function so we can capture the data here
omdb.search("harry potter", function(data) {
  console.log(data);
});

omdb.get("hocus pocus", function(data) {
  console.log(data);
});