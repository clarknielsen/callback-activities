# **Instructions**

* There is already an npm package for the OMDB API, but it no longer works, because an API key is now required to use this service. Let's write our own module that can accept an API key and then make basic searches against the OMDB API.

* In `omdb.js`, export a constructor function that accepts one parameter, the API key, and saves it as a property. Then add two methods to this constructor, one for making generic searches and one for finding specific movies. Let's call them "search" and "get." Both methods will need to accept two parameters: the title we're looking for and a callback function.

* Remember, callback functions are necessary when trying to pass asynchronous data from one module to another. In this case, our OMDB module will be using the axios package to make requests to <http://www.omdbapi.com/>.

* In `main.js`, call the "search" and "get" methods on the new omdb object, passing each one a title to search for and a callback function. If done correctly, we should be able to console.log the returned data in `main.js`, NOT `omdb.js`.

* HINT: Remember that the OMDB API has two different end-points. One returns a single object (or a single movie), the other returns an array of movies.

* HINT: Focus on the OMDB constructor first. Get the data console logging correctly in `omdb.js`, THEN implement callbacks to pass the data into `main.js`.

---

### BONUSES

  * Think of other methods we could add that would make this module more useful.

  * Use inquirer to capture user input and run the searches based off of their selection.

  * Look into "promises" and how we could use them to replace our callbacks.