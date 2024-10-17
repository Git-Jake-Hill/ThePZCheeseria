module.exports = (express, app) => {
    const controller = require("../Controllers/cheese.controller.js");
    // Add routes to server.
    const router = express.Router();
    app.use("/api/cheese", router);

    // CRUD Routes
    // Create
    router.post("/", controller.create);

    // Read
    router.get("/", controller.all);

    // Update
    router.put("/:id", controller.update);

    // Delete
    router.delete("/:id", controller.delete);
};
