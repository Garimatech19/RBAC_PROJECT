# Role Based Access Control Project

->This is a Role Based Access Control application using Nodejs, Express, Passport Js, etc.
->For authentication we have only Email & Password option but other authentication options using OAuth/OAuth2.0 like    Google, Facebook, Apple, GitHub, etc, can be easily incorporated.
->The application is based on the **MVC pattern** i.e. Model View Controller.
->**Mongoose** is used as an ORM for MongoDB for storing Users in Database.
->**Passport JS** is used for local(email, password) authentication.


## To start setting up the project

Step 1: Clone the repo
Step 2: cd into the cloned repo and run: npm install
Step 3: Put your credentials in the .env file.
        PORT=3000
        MONGODB_URI=YOUR_MONGODB_URI(example: mongodb://localhost:27017)
        DB_NAME=YOUR_DB_NAME
Step 4: Install MongoDB
Step 5: Run Mongo daemon
Step 6: Start the app by:npm start


# Explanation of each feature-
1.Express.js
In this project, I used Express.js, a lightweight and flexible web framework for Node.js. It helped me streamline the process of creating server-side logic, setting up routes, handling requests and responses, and integrating middleware efficiently.

2.EJS Templating Engine
I used EJS (Embedded JavaScript) to render dynamic web pages by combining HTML and JavaScript. This allowed me to pass data from the server to the front-end seamlessly, making the application interactive and dynamic.

3.Styling (Custom CSS)
For the visual aspect, I utilized custom CSS along with popular frameworks like Bootstrap or Tailwind CSS. This helped in creating a responsive, user-friendly interface that works well across different devices.

4.Passport.js (Local Authentication)
Passport.js was implemented for secure user authentication using email and password. It provided middleware that handled user login, logout, and session management while integrating with my user model in the database.

5.Roles (Admin, Moderator, Client)
I designed the system with role-based access control (RBAC), where users are assigned roles such as admin, moderator, or client. Each role has specific permissions, ensuring that access to sensitive data and actions is restricted appropriately.

6.Authorization
Beyond authentication, I implemented authorization to control access based on user roles. For example, only admins can access the admin panel, while moderators and clients are restricted to their designated areas and actions.

7.Mongoose (ORM for MongoDB)
I used Mongoose as the ORM to interact with MongoDB. It allowed me to define schemas for the database, perform CRUD operations efficiently, and ensure data consistency and validation.

8.Express Sessions
I used Express sessions to maintain user sessions after they log in. This means that the server remembers user-specific data (like their login status) across multiple requests, providing a better user experience.

9.Persisting Login Using Sessions (Mongo Store)
To ensure session persistence even after server restarts, I configured Mongo Store as the session store. This allowed logged-in users to remain authenticated without needing to log in again after a server reboot.

10.Redirect to Same Page After Login
I implemented functionality to redirect users back to the page they were attempting to access after a successful login. This improves usability, especially when users are prompted to log in from a restricted page.

11.Server-Side User Input Validation
Input validation was handled on the server side to ensure that data entered by users met specific criteria. This approach not only enhanced data integrity but also protected the system against common security vulnerabilities like SQL injection and XSS attacks.

12.Flash Messages
I used flash messages to display feedback to users, such as success or error notifications after actions like logging in, submitting a form, or encountering an issue. These messages are temporary and disappear after being viewed.

13.Handling HTTP Errors (e.g., 404)
To improve user experience, I added custom error pages for handling HTTP errors, such as 404 for "Page Not Found." This prevents users from seeing generic error messages and helps guide them back to the application.
