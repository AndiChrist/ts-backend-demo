// src/controllers/userController.ts
import { Request, Response } from 'express';
import db from '../db';
import { User } from '../models/User';

export async function list(req: Request, res: Response) {
    const [rows] = await db.query('SELECT * FROM users');
    const users = rows as User[];
    res.render('users', { users });
}

export function showAddForm(req: Request, res: Response) {
    res.render('form');
}

export async function add(req: Request, res: Response) {
    const { name, email } = req.body;
    await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.redirect('/users');
}

export async function showEditForm(req: Request, res: Response) {
    const id = req.params.id;
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    const user = (rows as User[])[0];
    if (!user) {
        res.status(404).send('Benutzer nicht gefunden');
        return
    }
    res.render('edit', { user });
}

export async function update(req: Request, res: Response) {
    const id = req.params.id;
    const { name, email } = req.body;
    await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    res.redirect('/users');
}

export async function remove(req: Request, res: Response) {
    const id = req.params.id;
    await db.query('DELETE FROM users WHERE id = ?', [id]);
    res.redirect('/users');
}
