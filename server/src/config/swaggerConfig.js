const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RevoBike API Docs",
      version: "1.0.0",
      description: "API documentation for RevoBike",
    },
    servers: [
      {
        url: `https://https://backend-ge4m.onrender.com/api`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["./src/routes/*.js"],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;