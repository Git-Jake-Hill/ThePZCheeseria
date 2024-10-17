const db = require("../Database");

// Create
exports.create = async (req, res) => {
    try {
        const cheese = await db.cheese.create(req.body);
        res.json(cheese);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Read
exports.all = async (req, res) => {
    try {
        const cheese = await db.cheese.findAll();
        res.json(cheese);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Update
exports.update = async (req, res) => {
    try {
        const cheese = await db.cheese.findByPk(req.params.id);
        if (cheese) {
            await cheese.update(req.body);
            res.json(cheese);
        } else {
            res.status(404).json({ message: "Cheese not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

// Delete
exports.delete = async (req, res) => {
    try {
        const cheese = await db.cheese.findByPk(req.params.id);
        if (cheese) {
            await cheese.destroy();
            res.json({ message: "Cheese deleted" });
        } else {
            res.status(404).json({ message: "Cheese not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
