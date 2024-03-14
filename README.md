# WebTechnology_CW2
The Cooking Blog is a web application designed to provide users with a platform to explore and share recipes from various cuisines. Users can browse through different categories of recipes, search for specific recipes, and even submit their own recipes to the platform. With a user-friendly interface and a wide range of recipes, Cooking Blog aims to inspire cooking enthusiasts and food lovers to discover new culinary delights.
To run the Cooking Blog application locally on a machine, these step-by-step instructions should be followed: Clone the repository with ‘git clone’ command. Navigate to the project directory with ‘cd’ command. Next, install the dependencies with ‘npm install’ command on terminal. Then start the server by typing ‘npm start’.


The Cooking Blog application relies on the following dependencies:
Express.js: Web application framework for Node.js,
Mongoose: MongoDB object modeling tool,
EJS: Embedded JavaScript templating,
Express-session: Session middleware for Express,
Connect-flash: Flash messages for Express,
Multer: Middleware for handling multipart/form-data (file uploads),
Bootstrap: Front-end framework for responsive web design,
Bootstrap-icons: Icons library for Bootstrap,
MongoDB: NoSQL database for storing recipe data.


For my project to be organized I tried to create an organized project structure and it is as follows:

Public directory- public/: Contains static files accessible to the client-side, such as images, JavaScript, and stylesheets. images/: Stores image files used in the application. javascript/: Houses client-side JavaScript files, including script.js. styles/: Contains CSS files, including style.css. This separation simplifies asset management and ensures efficient delivery to users.
Server directory- server/: Holds server-side logic and functionality. controllers/: Contains controller files responsible for handling requests and responses. recipeController.js: Manages operations related to recipes. models/: Contains database schema and model definitions. category.js: Defines the schema for categories. database.js: Handles database connection using Mongoose. recipe.js: Defines the schema for recipes. routes/: Defines route endpoints for the application. index.js: Routes requests to the appropriate controller methods. By separating controllers, models, and routes the codebase follows the MVC (Model-View-Controller) architecture, improving code organization and readability.
Views directory- contains EJS templates and is used to render HTML content. EJS templates for rendering HTML content are organized within the views directory. views/: Contains EJS templates used to render HTML content. layout/: Contains the main layout template (main.ejs) used by other EJS files. Individual EJS files represent different views/pages of the application, such as homepage (index.ejs), category listing (categories.ejs), recipe details (recipe.ejs), etc.


Github repository link: https://github.com/00015881/WebTechnology_CW2.git
Hosted application link: 

