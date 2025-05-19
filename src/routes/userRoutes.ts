// src/routes/userRoutes.ts
import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.list);
router.get('/add-user', userController.showAddForm);
router.post('/add-user', userController.add);
router.get('/edit-user/:id', userController.showEditForm);
router.post('/update-user/:id', userController.update);
router.post('/delete-user/:id', userController.remove);

export default router;
