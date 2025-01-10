const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass123',
    database: 'latihan'
});

connection.connect((err) => {
    if(err){
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!')
});

connection.query ('SELECT * FROM ssclass', (err,result,fields) =>{
    if (err){
        console.error('Error executing query', err);
        return;
    }
})

const newData = {name: 'Nisa', species: 'Human', age: '25'};
connection.query('INSERT INTO ssclass SET ?', newData, (err,result,fields)=> {
    if(err){
        console.error('Error executing query:', err);
        return;
    }
    console.log('Data sukses ditambahkan.');
});

const delData = 'Moon Sunjae';
connection.query('DELETE FROM ssclass WHERE `name`= ?',delData,(err,result,fields)=> {
    if(err){
        console.error('Error executing query:', err);
        return;
    }
    console.log('Data berhasil dihapus.');
});


connection.end();