// const axios = require("axios");

// // GET
// axios
//   .get("https://google.com")
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // POST
// axios
//   .post("https://whatever.com/todos", {
//     todo: "Buy the milk",
//   })
//   .then((res) => {
//     console.log(`statusCode: ${res.status}`);
//     console.log(res);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Import the 'http' module
const http = require("http");

// Create an HTTP server using createServer method
const server = http.createServer((req, res) => {
  // Callback function that gets executed for each incoming request (e.g.,
  // someone trying to access the page by making an HTTP request to your
  // server, like an API call or opening the page in a browser)

  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send a response to the client
  res.end("Hello, World!\n");
});

// Set the server to listen on a specific port (e.g., 3000)
const port = 3000;

// The server listens for incoming connections on the specified port
// The callback function is executed once the server starts listening
server.listen(port, () => {
  // This message is logged to the console when the server starts successfully
  console.log(`Server running at http://localhost:${port}/`);
});
