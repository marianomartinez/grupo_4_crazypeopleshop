module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        filename: {
            type: dataTypes.STRING(500),
            allowNull: false
        }
    };
    /*let config = {
        tableName: 'size'
    };*/
    const Image = sequelize.define(alias, cols)

    Image.associate = function (models) {
        Image.belongsToMany(models.Product, {
            as: "product",
            through: "product_image",
            // foreignKey: "id", // con este y el de abajo me hacía lío con las imágenes
            // otherKey: "productId" // con este y el de abajo me hacía lío con las imágenes
        });
        // Image.belongsTo(models.ProductImage, {
        //     as: "image",
        //     foreignKey: "imageId"
        // });
    }

    return Image;
}