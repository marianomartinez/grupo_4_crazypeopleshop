module.exports = (sequelize, dataTypes) => {
    let alias = 'Role';
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
        description: {
            type: dataTypes.STRING(100),

        },
        
    };
    /*let config = {
        tableName: 'Plates',
        timestamps: false
    };*/
    const Role = sequelize.define(alias, cols)
    return Role
}





