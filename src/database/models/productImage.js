module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductImage';
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
        imageId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    };
    let config = {
        tableName: 'product_image'
    };
    const ProductImage = sequelize.define(alias, cols, config)

    ProductImage.associate = function (models) {
        ProductImage.hasMany(models.Product, {
            as: "product",
            foreignKey: "id"
        });
        ProductImage.hasMany(models.Image, {
            as: "image",
            foreignKey: "id"
        });
    }

    return ProductImage;
}