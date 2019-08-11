require("dotenv").config('./env');
var keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var LIRI = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findConcert = function (findconcert) {
        // Search for concerts with bandsintown API
        var URL = `https://rest.bandsintown.com/artists/${findconcert}/events?app_id=codingbootcamp`

        axios.get(URL).then(function (response) {

            var jsonData = response.data[0];

            var concertData = [
                `Artist(s) performing: ${jsonData.lineup.join(", ")}`,
                `Name of Venue: ${jsonData.venue.name}`,
                `Venue Location: ${jsonData.venue.city}, ${jsonData.venue.country}`,
                `Date: ${moment(jsonData.datetime).format("MM/DD/YYYY")}`
            ].join("\n\n");

            fs.appendFile("log.txt", concertData + divider, function (err) {
                if (err) throw err;
                console.log(concertData);
            });
        });
    };

    this.findSong = function (findsong) {
        console.log(findsong)

        var spotify = new Spotify({
            id: '9fc66aaa01a943f3954c5fc5bbab8748',
            secret: 'acaf94eb4c0e4acaa36efe6296b46810'
        });

        spotify.search({
            type: 'track',
            query: findsong
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var musicData = data
            console.log(musicData);
        });
    };

    this.findMovie = function (findmovie) {
        // Search for movies with OMDB API
        var URL = `https://www.omdbapi.com/?t=${findmovie}&y=&plot=short&apikey=trilogy`

        axios.get(URL).then(function (response) {
            var jsonData = response.data;

            var movieData = [
                `Movie Title: ${jsonData.Title}`,
                `Release Year: ${jsonData.Year}`,
                `IMDB Rating: ${jsonData.imdbRating}`,
                `Rotten Tomatoes Rating: ${jsonData.Ratings[1].Value}`,
                // `Rotten Tomatoes Rating: ${rottenTomatoes}`,
                `Country Produced: ${jsonData.Country}`,
                `Language: ${jsonData.Language}`,
                `Actors/Actresses: ${jsonData.Actors}`,
                `Plot: ${jsonData.Plot}`
            ].join("\n\n");

            fs.appendFile("log.txt", movieData + divider, function (err) {
                if (err) throw err;
                console.log(movieData);
            });
        });
    };

    this.findDefault = function () {

    };
    // End of LIRI functions
}
module.exports = LIRI;