const { Sequelize, DataTypes } = require("sequelize");

const db = {
    Op: Sequelize.Op,
};

// Create Sequelize
db.sequelize = new Sequelize("sqlite::memory:");

// Include models
db.cheese = require("./Models/cheese.js")(db.sequelize, DataTypes);

// Include a sync option with seed data logic included.
// db.sync = async () => {
(async () => {
    await db.sequelize.sync({ force: true });
    await seedData();
})();

// DB data seed
async function seedData() {
    await db.cheese.create({
        type: "Cheddar",
        pricePerKilo: 12.5,
        colour: "Pale Yellow",
        image: "https://www.cheese.com/media/img/cheese/cheddar_large.jpg",
    });
    await db.cheese.create({
        type: "Brie de Meaux",
        pricePerKilo: 18.0,
        colour: "Straw",
        image: "https://www.cheese.com/media/img/cheese-suggestion/Brie_De_Meaux.jpg",
    });
    await db.cheese.create({
        type: "Bocconcini",
        pricePerKilo: 14.75,
        colour: "White",
        image: "https://www.cheese.com/media/img/cheese-suggestion/Bocconcini_1280x800.jpg",
    });
    await db.cheese.create({
        type: "Blue Cheese",
        pricePerKilo: 22.0,
        colour: "Blue",
        image: "https://www.cheese.com/media/img/cheese/Bleu_Cheese.jpg",
    });
    await db.cheese.create({
        type: "Mozzarella",
        pricePerKilo: 10.5,
        colour: "White",
        image: "https://www.cheese.com/media/img/cheese/mozzarella_cheese_on_wooden_cutting_board.jpg",
    });
}

module.exports = db;
