# cs-465-fullstack

### Architecture
For this course, we created a website using the MEAN (MongoDB, ExpressJS, AngularJS, and NodeJS) stack. I created a static customer-facing website that utilized ExpressJS, JavaScript, and Handlebars templates to present data from the database to the user. For the admin-facing site, I created it using a SPA (Single-Page-Application) that utilizes AngularJS for the UI, Mongoose to interact with the NoSQL MongoDB database, and JavaScript/TypeScript. I used the NoSQL MongoDB database because it is easier to interact with using JavaScript as the Mongo Shell also uses JavaScript-like syntax. 

### Functionality
JSON is different from JavaScript because JSON is a way to pass structured information between languages, while JavaScript is an actual programming language that utilizes the JSON format for some objects. JSON's are language agnostic and can be utilized by most languages, while a JavaScript object can really only be used by JavaScript or TypeScript. Refactoring the code to use reusable UI components was very helpful because it allowed a more dynamic page setup compared to a more static and unchanging website. 

### Testing
To test this website, specifically the RESTful API endpoints, I used tools like MongoDB's Compass to check if data was properly added/updated/removed from the database, and Postman to send test API calls. I didn't particularly run into any issues when implementing the authorization modules for the API endpoints. Using an authentication module that holds the methods required to login/logout and check the password's hash with a user's password hash in the db was helpful as it abstracts away any code related to the login process so it didn't clutter any of the component's code and possibly cause a bug or two. 

### Reflection
This course didn't help much with my specific professional goals, but it has opened my eyes to more fields that I can dip my toes in and become a more well-rounded developer. This course helped me a lot in understanding how to work on a few personal projects that I was planning on working on, but with the knowledge gained from this course, I can say I am more confident in working on those projects. 