const express = require("express");
const cors = require("cors");

// Setup express server
const app = express();
app.use(express.json());
app.use(cors());

// Add routes.
require("./src/Routes/cheese.routes.js")(express, app);

// Export the app for testing
module.exports = app;

// Add API docs
const setupSwaggerDocs = require("./swagger");
setupSwaggerDocs(app);

// Start the server
const PORT = 5000;
let server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.closeServer = () => {
    server.close();
};
