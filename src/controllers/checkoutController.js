import {checkout} from '../services/checkoutService.js';

export const checkoutproduct = async (req, res) => {
    try {
        const {
            productId
        } = req.body;
        const newCheckout = await checkout(productId);
        res.status(201).json({
            message: 'Checkout success',
            newCheckout
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
};