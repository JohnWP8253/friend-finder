# friend-finder


## Author
John Pendergrass

## Purpose of app
A 'dating app' that will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

## Code Explanation
- The `server.js` file sets up the Express server, specifying our port number, the npm packages that need to be loaded, and also the routes, which we have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of the code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- The 2 routing files (`htmlRoutes.js` and `apiRoutes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in otheur server-side data or add new friends
- Best match is calculated by finding the friend with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey
- In essense, this will also be a form of notes that you may later reference later
- Friends are stored as such:


## Screenshots and videos
Link to the video: 

## Links
* Link to video: 
* Link to repository: https://github.com/JohnWP8253/friend-finder
* Heroku Link: 

## Tech used
    * JavaScript
    * Node.js
    * HTML/CSS
    * Materialize.css
    * Express.js

## Shoutouts
Thanks to:
* Amy Hearr
* Brooke Guarienti
* Haylee McLemore
* Kortnie Heidel
* Manoli Koutouzos (big shoutout for fixing my code)
