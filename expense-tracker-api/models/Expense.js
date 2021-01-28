module.exports = (sequelize, type) => {
    return sequelize.define('expenses', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name:{ type:type.STRING
        },
        price:{type:type.DECIMAL(10,2)},
        creationDay:{
            type:type.STRING,
            defaultValue: new Date().toLocaleDateString("en-US")
        },
        category:{
            type:type.STRING
        }
    })
}