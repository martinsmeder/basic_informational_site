const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

function serveHTML(fileName, res, status = 200) {
  // Read the HTML file
  fs.readFile(fileName, (err, data) => {
    if (err) {
      // If there's an error (e.g., file not found), serve the 404 page
      serveHTML("404.html", res, 404);
    } else {
      // Set the HTTP status code
      res.status(status);

      // Send the HTML content to the client
      res.send(data);
    }
  });
}

// Middleware to set Content-Type to HTML for all responses
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

// Route handling for different paths
app.get("/", (req, res) => {
  serveHTML("index.html", res);
});

app.get("/about", (req, res) => {
  serveHTML("about.html", res);
});

app.get("/contact-me", (req, res) => {
  serveHTML("contact-me.html", res);
});

// Handling for unrecognized routes
app.use((req, res) => {
  serveHTML("404.html", res, 404);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
