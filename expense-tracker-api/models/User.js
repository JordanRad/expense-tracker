module.exports = (sequelize, type) => {
    return sequelize.define('users', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email:{ type:type.STRING,
            unique:true
        },
        firstName:type.STRING,
        lastName:type.STRING,
        password: type.STRING,
        status:type.STRING
    })
}