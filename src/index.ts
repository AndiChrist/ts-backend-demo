import express from 'express';
import { db } from './db';
import { User } from './models/User';
import path from 'path';

const app = express();
const PORT = 3000;

app.get('/usersjson', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        const users = rows as User[];
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Datenbankfehler' });
    }
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});

// Vor app.listen():
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// HTML-Route statt JSON:
app.get('/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        const users = rows as User[];
        res.render('users', { users });
    } catch (err) {
        console.error(err);
        res.status(500).send('Fehler beim Laden der Benutzer');
    }
});
