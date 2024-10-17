/**
 * @swagger
 * components:
 *   schemas:
 *     Cheese:
 *       type: object
 *       required:
 *         - type
 *         - pricePerKilo
 *         - colour
 *         - image
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the cheese
 *         type:
 *           type: string
 *           description: Type of cheese
 *         pricePerKilo:
 *           type: number
 *           description: Price per kilogram of the cheese
 *         colour:
 *           type: string
 *           description: Colour of the cheese
 *         image:
 *           type: string
 *           description: Image URL of the cheese
 *       example:
 *         id: 1
 *         type: Blue Cheese
 *         pricePerKilo: 22.0
 *         colour: Blue
 *         image: https://www.cheese.com/media/img/cheese/Bleu_Cheese.jpg
 */

/**
 * @swagger
 * tags:
 *   name: Cheese
 *   description: Cheese management API
 */

module.exports = (express, app) => {
    const controller = require("../Controllers/cheese.controller.js");
    // Add routes to server.
    const router = express.Router();
    app.use("/api/cheese", router);

    // CRUD Routes
    /**
     * @swagger
     * /api/cheese:
     *   post:
     *     summary: Create a new cheese
     *     tags: [Cheese]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cheese'
     *     responses:
     *       200:
     *         description: The cheese was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cheese'
     *       500:
     *         description: Some server error
     */
    router.post("/", controller.create);

    /**
     * @swagger
     * /api/cheese:
     *   get:
     *     summary: Get all cheeses
     *     tags: [Cheese]
     *     responses:
     *       200:
     *         description: List of cheeses
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cheese'
     */
    router.get("/", controller.all);

    /**
     * @swagger
     * /api/cheese/{id}:
     *   put:
     *     summary: Update a cheese by the id
     *     tags: [Cheese]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: The cheese id
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Cheese'
     *     responses:
     *       200:
     *         description: The cheese was updated
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cheese'
     *       404:
     *         description: The cheese was not found
     *       500:
     *         description: Some error happened
     */
    router.put("/:id", controller.update);

    /**
     * @swagger
     * /api/cheese/{id}:
     *   delete:
     *     summary: Remove a cheese by id
     *     tags: [Cheese]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: The cheese id
     *     responses:
     *       200:
     *         description: The cheese was deleted
     *       404:
     *         description: The cheese was not found
     *       500:
     *         description: Some error happened
     */
    router.delete("/:id", controller.delete);
};
