// src/routes/userRoutes.ts
import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.list);
router.get('/add-user', userController.showAddForm);
router.post('/add-user', userController.add);
router.get('/edit-user/:id', userController.showEditForm);
router.post('/update-user/:id', userController.update);
router.post('/delete-user/:id', userController.remove);

export default router;
