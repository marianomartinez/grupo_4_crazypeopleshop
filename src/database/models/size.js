module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        eusize: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    /*let config = {
        tableName: 'size'
    };*/
    const Size = sequelize.define(alias, cols)

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "product_size_stock",
            foreignKey: "sizeid",
            otherKey: "productId"
        });
    }

    return Size;
}