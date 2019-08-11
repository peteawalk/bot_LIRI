require("dotenv").config();
var keys = require("./keys.js");
const axios = require("axios");
const fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var LIRI = function () {
    var divider = "\n------------------------------------------------------------\n\n";

    this.findConcert = function (findconcert) {
        // Some for concerts with bandsintown API
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
            id: SPOTIFY_ID,
            secret: SPOTIFY_SECRET
        });

        spotify.search({
            type: 'track',
            query: findsong
        }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
        });
    };

    this.findMovie = function () {
        // Search for movie with OMDB API
    };

    this.findDefault = function () {
        // Default search
    }

}; // End of LIRI functions

module.exports = LIRI;