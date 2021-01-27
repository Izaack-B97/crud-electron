const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'electrondb'
});
// .then(() => {
//     console.log('DATABASES IS CONNECTED');
// })
// .catch(err => {
//     console.log('Error al conectar en BD. ' + err);
// });

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}