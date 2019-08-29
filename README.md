# LIRI
### Language Interpretation and Recognition Interface
![](vanillaJS.png) Have you ever wanted to know when your favorite artist was in town? Have you ever wanted to know more about a song? Do you find IMDB a bit cumbersome? Try out LIRI!  
LIRI is a SIRI for your command line. You can search for concerts, movie details and track details. This is a node.JS tool that must be run in the command line.

## Configuration/Install
You will need to create your own .env in the relative path of all the files. Similar to this:  
#Spotify API keys  
SPOTIFY_ID=your-spotify-id  
SPOTIFY_SECRET=your-spotify-secret  

## How to run:
node liri.js concert-this <artist/band name here>
Commands that LIRI accepts:
  concert-this
  spotify-this-song
  movie-this
  do-what-it-says
  
## Technologies used:
Javascript (node.JS) with the help of Axios and Moment.JS  
APIs: Spotify API, OMDB API and Bands in Town API.  

## LIRI in action:
![](LIRI_concert-this_functionality.gif)

## Created by: Peter Walker
