import { Router } from 'express';
import * as cartController from '../controllers/cartController.js';
import { authToken, authorizePermission } from '../middleware/authMiddleware.js'

const router = Router();
router.use(authToken);
router.get('/cart/:id', authorizePermission('browse_categories'), cartController.getAllcarts);
router.post('/cart/addItem', authorizePermission('add_to_cart'), cartController.addItemToCart);
router.put('/cart/editItem/:cartId/:productId', authorizePermission('edit_item_cart'), cartController.editCartItem);
router.delete('/cart/deleteItem/:cartId/:productId', authorizePermission('delete_item_cart'), cartController.deleteCartItem);

export default router