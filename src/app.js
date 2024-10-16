import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'
const app = express()

app.get('/', (req, res) =>{
    res.send('Welcome to server')
})

app.get('/ping', async (req, res) =>{
    const [result] = await pool.query(`SELECT "hello world" as 
        RESULT`);
    res.json(result[0])
})

app.get('/create', async (req, res) => {
    const result = await pool.query(`INSERT INTO cliente (Nombre, Email, Contrasena) VALUES
('Nataly Ponce', 'Nat.Ponce@example.com', 'afjoaqit3')`);
    res.json(result);
});



app.listen(PORT)
console.log('Server on port ', PORT)