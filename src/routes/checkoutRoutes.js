import {Router} from 'express';
import {checkoutproduct} from '../controllers/checkoutController.js';

const router = Router()

router.post('/checkout', checkoutproduct);
export default router