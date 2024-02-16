import * as cartService from "../services/cartService.js";

export const getAllcarts = async (req, res) => {
     const cartId = parseInt(req.params.id);
    try{
        const carts = await cartService.getCart(cartId);
        res.status(200).json(carts);
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
    
}
   export const addItemToCart = async (req, res) => {
        try {
            const {
                cartId,
                productId,
                quantity
            } = req.body;
            const result = await cartService.addItemToCart(cartId, productId, quantity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({
                error: error.message
            });
        }
    }

export const editCartItem = async (req, res) => {
    try {
        const { cartId, productId } = req.params;
        const { quantity } = req.body;
        const result = await cartService.editCartItem(cartId, quantity, productId, );
        res.status(200).json(result);
    } catch (error) {
        console.error(error); 
        res.status(500).json({
            error: error.message || "Internal server error",
        });
    }
};


   export const deleteCartItem = async (req, res) => {
       try {
        const cartId = parseInt(req.params.cartId);
        const productId = parseInt(req.params.productId);
           const result = await cartService.deleteCartItem(cartId, productId);
           res.status(200).json(result);
       } catch (error) {
           console.error(error);
           res.status(500).json({
               error: error.message || "Internal server error",
           });
       }
   };

