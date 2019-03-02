var File = require("./file.js");

var test = new File("test.txt");

// TO DO: add a callback function inside the "read" method that console logs the returned data from file.js

test.read(function(data) {
  console.log(data);
});