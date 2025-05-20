const {Sequelize} =require('sequelize');

const sequelize = new Sequelize(
    'ecommerweb',//nombre de la BD
    'root', //nombre usuario
    'mgia730@lc@3b3s',
    {
        host:'127.0.0.1',
        port:3306,
        dialect:'mysql'
    }//contrasena Mysql 
)

sequelize.authenticate()
    .then(()=>{console.log('Conexoin establecida')})
    .catch(error=>{console.log('ocurrio un error' + error)})

module.exports=sequelize;