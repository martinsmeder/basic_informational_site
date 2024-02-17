const http = require("node:http");
const fs = require("fs");

function serveHTML(fileName, res, status = 200) {
  // Read the HTML file
  fs.readFile(fileName, (err, data) => {
    if (err) {
      // If there's an error (e.g., file not found), serve the 404 page
      return serveHTML("404.html", res, 404);
    }

    // Set the HTTP status code
    res.writeHead(status, { "Content-Type": "text/html" });

    // Send the HTML content to the client
    res.end(data);
  });
}

const server = http.createServer();

server.on("request", (request, res) => {
  // Set Content-Type to HTML for all responses
  res.setHeader("Content-Type", "text/html");

  // Handle different routes
  switch (request.url) {
    case "/":
      serveHTML("index.html", res);
      break;
    case "/about":
      serveHTML("about.html", res);
      break;
    case "/contact-me":
      serveHTML("contact-me.html", res);
      break;
    default:
      // If the route is not recognized, serve the 404 page
      serveHTML("404.html", res, 404);
  }
});

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080/");
});
