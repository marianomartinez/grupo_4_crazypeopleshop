module.exports = (sequelize, dataTypes) => {
    let alias = 'Subcategory';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

      
          subcategoryName: {
                type: dataTypes.STRING(45),
                allowNull: false
            },

            idCategory: {
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
    return Subcategory
}