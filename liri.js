var LIRI = require("./liriwork");

// Create new LIRI Object
var liri = new LIRI();

//acceptable commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

var command = process.argv[2];
var queryString = process.argv.slice(3).join(" ");

// Default values
if (!command) {
    command = "spotify-this-song";
};

if (!queryString) {
    queryString = "I Want it That Way";
};


if (command === 'concert-this') {
    console.log("Searching for concert featuring: " + queryString);
    liri.findConcert(queryString);
} else if (command === 'spotify-this-song') {
    console.log("Searching for song: " + queryString);
    liri.findSong(queryString);
} else if (command === 'movie-this') {
    console.log("Searching for movie: " + queryString);
    liri.findMovie(queryString);
} else if (command === 'do-what-it-says') {
    console.log("Searching for default");
    liri.findDefault(queryString);
} else {
    console.log("Enter a command and query!\n e.g. node liri concert-this radiohead");
};