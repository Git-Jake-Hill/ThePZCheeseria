const request = require("supertest");
const db = require("../Database/index");
const app = require("../../server");

// Mock the database calls
jest.mock("../Database/index", () => ({
    cheese: {
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        destroy: jest.fn(),
        findByPk: jest.fn(),
    },
}));

describe("Cheese API", () => {
    // Test GET all cheeses
    test("should GET all cheeses successfully", async () => {
        const mockCheeseData = [
            { id: 1, type: "Cheddar", image: "cheddar.jpg", pricePerKilo: 20.5, colour: "yellow" },
            { id: 2, type: "Brie", image: "brie.jpg", pricePerKilo: 25.5, colour: "white" },
        ];

        // Mock db
        db.cheese.findAll.mockResolvedValue(mockCheeseData);

        const response = await request(app).get("/api/cheese");

        expect(response.statusCode).toBe(200); // Check for 200 OK
        expect(Array.isArray(response.body)).toBe(true); // Check if the response is an array
        expect(response.body.length).toBe(2); // Expect 2 items in the response
        expect(response.body[0].type).toBe("Cheddar"); // Check the first item's type
    });

    // Test POST a new cheese
    test("should POST a new cheese", async () => {
        const newCheese = {
            type: "Gouda",
            image: "gouda.jpg",
            pricePerKilo: 18.5,
            colour: "yellow",
        };

        // Mock db
        db.cheese.create.mockResolvedValue({ id: 1, ...newCheese });

        const response = await request(app).post("/api/cheese").send(newCheese);

        expect(response.statusCode).toBe(200); // Check if status is 200 OK
        expect(response.body).toHaveProperty("id", 1); // Check if response has the new ID
        expect(response.body.type).toBe("Gouda"); // Check if type matches
    });

    app.closeServer();
});