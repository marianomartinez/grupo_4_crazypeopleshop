module.exports = (sequelize, dataTypes) => {
    let alias = 'user';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: dataTypes.STRING,
        lastName: dataTypes.STRING,
        email: dataTypes.STRING,
        password: dataTypes.STRING,
        role: dataTypes.STRING,
        image: dataTypes.STRING,
        phone: dataTypes.STRING

        
    };
    /*let config = {
        tableName: 'Plates',
        timestamps: false
    };*/
    const user = sequelize.define(alias, cols)
    return user
}