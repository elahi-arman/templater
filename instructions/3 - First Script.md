# Project Overview

This project is going to create a folder structure given a template. It's similar to what a tool like Puppet or cookie-cutter would do. 

## Project Outline

1. Create tmp directory and random tmp files.
2. Add fake content and some fake files using faker.js
3. Make this into a command line tool that can deploy our project structure to any directory (within reason) with some templates
4. Make network requests for file contents
5. Create an express application with routes to GET files from the template
6. Add a POST route to add new files into the directory structure.
7. Have Express.js serve HTML with the ability to GET and POST files.

## Document Structure

Each file from 4 onwards will go over one of the pieces of the project outline. If you just follow along, you'll get a basic program that can create a directory structure. There are extra excercises designed to make the program more robust and usable. 

## Concepts Covered Per Section

1. Creating Node Scripts & Using the standard library
2. Importing a node package and using it + file system and path operations
3. Creating command line tools
4. Asynchronous programming and making requests
5. Creating an API server + testing
6. Best Practices for organizing code 
7. Creating a simple web interface