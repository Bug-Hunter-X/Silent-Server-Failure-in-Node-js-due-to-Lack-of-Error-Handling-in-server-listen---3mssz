# Silent Server Failure in Node.js

This repository demonstrates a common but easily overlooked error in Node.js server development: the lack of proper error handling for the `server.listen()` method.  When the server fails to start (due to port conflicts, permissions problems, or other issues), the application might not provide any indication of the failure.

## The Bug
The original `server.js` file contains a simple HTTP server that lacks error handling.  If you try to run it on a port that is already in use, it will silently fail without producing an error message.

## The Solution
The `serverSolution.js` file demonstrates the correct way to handle errors during server startup by adding an error listener to `server.listen()`. This ensures that any errors during server initialization are caught and reported to the console.

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.  This will work if the port is available.
3. Run `node server.js` again. Since the port is likely already in use, the server will silently fail without any indication of the error.
4. Run `node serverSolution.js`. This version demonstrates error handling, which prints an error message to the console when the server fails to start.

## Lessons Learned
Always include comprehensive error handling when creating Node.js servers.  Silent failures are extremely difficult to debug, and good error handling helps ensure robustness and maintainability. 