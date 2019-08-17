require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
var Spotify = require("node-spotify-api");

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
        var spotify = new Spotify(keys.spotify);

        spotify.search({
                type: 'track',
                query: findsong,
                limit: 5
            },
            function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                var jsonData = data;
                var musicData = [
                    `Artist: ${jsonData.tracks.items[0].artists[0].name}`,
                    `Song: ${data.tracks.items[0].name}`,
                    `Preview: ${data.tracks.items[3].preview_url}`,
                    `Album: ${data.tracks.items[0].album.name}`,
                ].join("\n\n");

                fs.appendFile("log.txt", musicData + divider, function (err) {
                    if (err) throw err;
                    console.log(musicData);
                });
            }); // End of spotify.search
    } // End of findSong Constructor


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
        console.log(fs.readFile("./random.txt"));
        this.findSong(fs.readFile("./random.txt"));
    };
    // End of LIRI functions

}
module.exports = LIRI;