const mysql = require('promise-mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'electrondb'
});

if ( connection ) {
    console.log('Database is connected');
}

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}