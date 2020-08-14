module.exports = (sequelize, dataTypes) => {
    let alias = 'Subcategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

      
          name: {
                type: dataTypes.STRING(45),
                allowNull: false
            },

            categoryId: {
                type: dataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: dataTypes.STRING(500),
                
            },

       

    };
    /*let config = {
        tableName: 'Plates',
        timestamps: false
    };*/
    const Subcategory = sequelize.define(alias, cols)

    Subcategory.associate = function (models) {
        Subcategory.belongsTo(models.Category, {
            as: "category",
            foreignKey: "id"
        });
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "subcategoryId"
        })
    }


    return Subcategory
}