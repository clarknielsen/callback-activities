// npm module to make http requests
var axios = require("axios");

// constructor function to create new omdb api objects
function Omdb(key) {
  // store key as part of base url
  this.url = "http://www.omdbapi.com/?apikey=" + key;

  this.search = function(title, callback) {
    // do a generic search against the api based on the title given
    axios.get(this.url + "&s=" + title).then(function(res) {
      // send back parsed "Search" array
      callback(res.data.Search);
    });
  };

  this.get = function(title, callback) {
    // do a specific search against the api
    axios.get(this.url + "&t=" + title).then(function(res) {
      // send back the movie object
      callback(res.data);
    });
  };
}

module.exports = Omdb;