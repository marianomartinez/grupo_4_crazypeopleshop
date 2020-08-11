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
            foreignKey: "id",
            otherKey: "productId"
        });
        // Image.belongsTo(models.ProductImage, {
        //     as: "image",
        //     foreignKey: "imageId"
        // });
    }

    return Image;
}