# bot_LIRI
### Language Interpretation and Recognition Interface
This is a node.JS tool that must be run via command line.
e.g. node 


1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

2. Give a high-level overview of how the app is organized
 You will need to create your own .env in the relative path of all the files. Similar to this:
 # Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

3. Give start-to-finish instructions on how to run the app

node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue
Venue location
Date of the Event (use moment to format this as "MM/DD/YYYY")


4. Include screenshots, gifs or videos of the app functioning

5. Contain a link to a deployed version of the app

6. Clearly list the technologies used in the app

7. State your role in the app development