const express = require('express');
const mysql = require('mysql');

const hostname = '127.0.0.1';
const port = 3000;

let app = express();
app.use(express.static('format'));
app.set('view engine','ejs');

const DISPLAYcalenplanner = require('./routes/calenplanner');
const dbConfig =
{
    host: 'localhost',
    user: 'root',
    password: 'Booksarethebest5.',
    database: 'calenplanner'

}
const db = mysql.createConnection(dbConfig);

function connectCallback(error)
{
    if(error)
    {
        throw error;
    }

    console.log('Connected to the database');

    db.query('SELECT * FROM tasks', function(error, results)
    {
        if(error)
        {
            throw error;
        }
        console.log(results);
        
    });
}


db.connect(connectCallback);
global.db=db;


app.get('/', DISPLAYcalenplanner.mainCal);

function listenCallback()
{
    console.log(`Listening on http//${hostname}:${port}`);
}


app.listen(port, hostname, listenCallback);
