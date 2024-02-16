
import { Router } from 'express';
import multer from 'multer';
import { authToken, authorizePermission } from '../middleware/authMiddleware.js'
import * as productController from '../controllers/productController.js';

const router = Router();
const upload = multer({ dest: 'uploads/' });
router.use(authToken);
router.get('/products', authorizePermission('browse_products'), productController.getAllProducts);
router.get('/products/:id', authorizePermission('read_product'), productController.getProductById);
router.post('/products', upload.single('image'), authorizePermission('add_product'), productController.createProduct);
router.put('/products/:id', upload.single('image'), authorizePermission('edit_product'), productController.updateProduct);
router.delete('/products/:id', authorizePermission('delete_product'), productController.deleteProduct);

export default router;
