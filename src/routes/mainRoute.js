import { Router } from "express";
import userRoute from './userRoute.js'
import categoryRoute from './categoryRoute.js'
import productRoute from './productRoute.js'
import shopRoute from './shopRoute.js'
import cartItemRoute from './cartRoutes.js'
import checkoutRoute from './checkoutRoutes.js'

const router = Router()

router.use(userRoute)
router.use(categoryRoute)
router.use(productRoute)
router.use(shopRoute)
router.use(cartItemRoute)
router.use(checkoutRoute)

export default router