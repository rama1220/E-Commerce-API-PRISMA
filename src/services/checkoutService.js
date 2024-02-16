import prisma from "../config/prisma.js";

export const checkout = async (productId) => {
    try {
        const cartItems = await prisma.cartItem.findMany({
            where: {
                productId: productId
            }
        });
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            }
        })
        if (cartItems.length === 0) {
            throw new Error('No cart items were found for this product');
        }
        const newCheckout = await prisma.checkOut.create({
            data: {
                cartId: cartItems[0].cartId,
                productId: cartItems[0].productId,
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: cartItems[0].quantity,
                total: cartItems[0].total
            }
        });

        return newCheckout;
    } catch (error) {
        throw new Error(`Failed to make checkout : ${error}`);
    }
};