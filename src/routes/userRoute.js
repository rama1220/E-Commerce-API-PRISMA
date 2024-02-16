import {Router} from 'express';
import * as userController from '../controllers/userControllers.js';
import {validateTokenRequest} from '../middleware/validationMiddleware.js'

const router = Router();

router.post('/users', userController.createUserHandler);
router.post('/sellers', userController.registerSellerHandler);
router.put('/users/:id', userController.updateProfileHandler);
router.post('/login', validateTokenRequest, userController.loginUserHandler);

export default router;