import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',      // ggf. anpassen
    database: 'demo',
});

export default db;
