module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        show: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        subcategoryId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(1000),
        },
    };
    /*let config = {
        tableName: 'size'
    };*/
    const Size = sequelize.define(alias, cols)

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "product_size_stock",
            foreignKey: "id",
            otherKey: "productId"
        });
    }

    return Size;
}