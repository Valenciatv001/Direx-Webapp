# My App

This is a multi-user application that allows users to create posts and fetches a list of posts from a backend server in batches of 10 based on the latest and renders the post in a React JS SPA application. The app has signup, login, and password reset capability. The post consists of a minimum of two pictures and a maximum of six pictures, a short text as post description of 160 words, and the time the post was created. The user information includes first name, last name, phone number, gender, and password. Login criteria is phone number and password. The user's own post does not appear in the list of posts, but other users' posts are okay. The app uses JWT tokens for session management, and the user can login and logout. The app allows the user to post from the frontend manually, and the database has a list of posts not less than 200. The app automatically loads more items in the frontend when you reach the bottom, and the user can refresh the list of posts. The app has API documentation.

## Installation

To run the app locally, you will need to have Node.js and MongoDB installed on your system. You can download Node.js from the official website (https://nodejs.org/) and MongoDB from the official website (https://www.mongodb.com/).

Once you have Node.js and MongoDB installed, you can clone the repository and install the dependencies:



git clone https://github.com/valenciatv001/Direx-Webapp.git
cd your-repo
npm install



## Configuration

Before you can run the app, you will need to configure some environment variables. Create a `.env` file in the root directory of the project and add the following variables:


PORT=3000
MONGODB_URI=mongodb://localhost/my-app
JWT_SECRET=my-secret





Replace `my-app` with the name of your MongoDB database and `my-secret` with a secret string of your choice.

## Running the app

To run the app, use the following command:


This will start the backend server and the frontend server. You can access the app in your web browser at http://localhost:3000.

## API documentation

The API documentation is available at http://localhost:3000/api-docs. You can use this documentation to learn about the API endpoints and how to use them.
