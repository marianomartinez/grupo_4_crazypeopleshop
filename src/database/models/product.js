module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
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
        tableName: 'product'
    };*/
    const Product = sequelize.define(alias, cols)

    Product.associate = function (models) {
        Product.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategoryId"
        });
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "product_size_stock",
            foreignKey: "id",
            otherKey: "sizeId"
        });
        Product.belongsToMany(models.Image, {
            as: "images",
            through: "product_image",
            // foreignKey: "id", // con este y el de abajo me hacía lío con las imágenes
            // otherKey: "imageId" // con este y el de abajo me hacía lío con las imágenes
        });
        // Product.belongsTo(models.ProductImage, {
        //     as: "product",
        //     foreignKey: "productId"
        // });
    }

    return Product;
}