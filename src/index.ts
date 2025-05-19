// src/index.ts
import express from 'express';
import path from 'path';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routing
app.use(userRoutes);

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
