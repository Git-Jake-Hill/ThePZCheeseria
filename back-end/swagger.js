const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "PZ Cheeseria API",
            version: "1.0.0",
            description: "PZ Cheeseria API for the love of cheese",
        },
        servers: [
            {
                url: "http://localhost:5000/",
            },
        ],
    },
    apis: ["./src/routes/*.js"],
};

// Generate the Swagger spec
const swaggerSpec = swaggerJsDoc(options);

// Function to setup swagger docs
function setupSwaggerDocs(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log("API Docs available at http://localhost:5000/api-docs");
}

module.exports = setupSwaggerDocs;
