module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoryName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(500),
            
        },
        image: {
            type: dataTypes.STRING(500),
            
        }


    };
    /*let config = {
        tableName: 'Plates',
        timestamps: false
    };*/
    const Category = sequelize.define(alias, cols)
    return Category
}





