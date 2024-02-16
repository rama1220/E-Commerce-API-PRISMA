import { Router } from 'express';
import { getShopByName, updateShop  } from '../controllers/shopController.js';
import { authToken, authorizePermission } from '../middleware/authMiddleware.js'

const router = Router();
router.use(authToken);

router.get('/shop/name', authorizePermission('read_shop'), getShopByName);
router.put('/shop/:id', authorizePermission('edit_shop'), updateShop);

export default router;
