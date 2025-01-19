# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where JSON request bodies are not correctly parsed when empty or invalid.  The server logs an empty object instead of handling the error gracefully.  The solution provides a robust approach to handle these situations.

## Bug

The `bug.js` file contains an Express.js application that attempts to parse JSON request bodies using `express.json()`. However, it fails to handle cases where the request body is empty or contains invalid JSON.  This leads to unexpected behavior and potential errors in production.

## Solution

The `bugSolution.js` file demonstrates a corrected version that utilizes error handling middleware to gracefully handle cases of empty or invalid JSON request bodies.

## Setup and Run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the required dependencies.
4. Run `node bug.js` to run the buggy application and `node bugSolution.js` to run the fixed version.
5. Send a POST request to `http://localhost:3000/user` with an empty or invalid JSON body to observe the difference.