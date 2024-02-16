import { Router } from "express";
import { authToken, authorizePermission } from '../middleware/authMiddleware.js'
import * as categoryController from '../controllers/categoryController.js';

const router = Router()
router.use(authToken);
router.get('/category', authorizePermission('browse_categories'), categoryController.getAllCategories);
router.get('/category/:id', authorizePermission('read_category'), categoryController.getCategoryById);
router.post('/category', authorizePermission('add_category'), categoryController.createCategory);
router.put('/category/:id', authorizePermission('edit_category'), categoryController.updateCategory);
router.delete('/category/:id', authorizePermission('delete_category'), categoryController.deleteCategory);

export default router;
