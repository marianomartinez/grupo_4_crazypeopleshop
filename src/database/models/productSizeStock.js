module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductSizeStock';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        sizeId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }, 
        stock: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_size_stock'
    };
    const ProductSizeStock = sequelize.define(alias, cols, config)

    ProductSizeStock.associate = function (models) {
        ProductSizeStock.hasMany(models.Product, {
            as: "product",
            foreignKey: "id"
        });
        ProductSizeStock.hasMany(models.Size, {
            as: "size",
            foreignKey: "id"
        });
        ProductSizeStock.belongsTo(models.Size, {
            as: "sizes",
            // through: "product_size_stock",
            foreignKey: "sizeid",
            // otherKey: "productId"
        });
    }

    return ProductSizeStock;
}