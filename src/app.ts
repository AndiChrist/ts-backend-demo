// src/app.ts
import express from 'express';
import userRoutes from './routes/userRoutes';
import path from 'path';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/users', userRoutes);
app.get('/', (req, res) => res.redirect('/users'));

export default app;
