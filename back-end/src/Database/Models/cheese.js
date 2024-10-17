module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        "cheese",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            pricePerKilo: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            colour: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
