import express from 'express';
import { db } from './db';
import { User } from './models/User';

const app = express();
const PORT = 3000;

app.get('/users', async (req, res) => {
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
