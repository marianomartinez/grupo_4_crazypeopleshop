module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
            // unique: 
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        role: dataTypes.STRING(45),
        image: dataTypes.STRING(100),
        phone: dataTypes.STRING(45)


    };
    /*let config = {
        tableName: 'Plates',
        timestamps: false
    };*/
    const User = sequelize.define(alias, cols)
    return User
}