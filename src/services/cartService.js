import prisma from "../config/prisma.js";

export const getCart = async (cartId) => {
    try {
        const cart = await prisma.cart.findUnique({
            where: {
                id: cartId
            },
            include: {
                items: true
            }
        });
        return cart;
    } catch (error) {
        throw new Error(error);
    }
}



export const addItemToCart = async (cartId, productId, quantity) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            select: {
                price: true
            },
        });

        if (!product) {
            throw new Error('Product not found');
        }
        const cartItem = await prisma.cartItem.create({
            data: {
                cartId: cartId,
                productId: productId,
                quantity: quantity,
                total: product.price * quantity,
            },
        });

        const Total = await prisma.cartItem.findMany({
            where: {
                cartId: cartId
            },
            select: {
                total: true,
                quantity: true
            },
        });

        const totalAmount = Total.reduce((acc, curr) => acc + curr.total, 0);
        const totalQuantity = Total.reduce((acc, curr) => acc + curr.quantity, 0);
        await prisma.cart.update({
            where: {
                id: cartId
            },
            data: {
                totalItems: totalQuantity,
                totalAmount: totalAmount
            },
        });

        return {
            message: 'Item added to cart successfully',
            cartItem
        };
    } catch (error) {
        throw new Error(`Failed to add item to cart: ${error}`);
    }
}
export const editCartItem = async (cartId, newQuantity, productId) => {
    cartId = parseInt(cartId);
    productId = parseInt(productId);
    newQuantity = parseInt(newQuantity);
    console.log(cartId, newQuantity);

    try {

        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            select: {
                price: true
            },
        });
        await prisma.cartItem.update({
            where: {
                cartId_productId: {
                    cartId: cartId,
                    productId: productId
                }
            },
            data: {
                quantity: newQuantity,
                total: newQuantity * product.price 
            }
        });
        const cartItems = await prisma.cartItem.findMany({
            where: {
                cartId: cartId
            }
        });

        const totalAmount = cartItems.reduce((acc, curr) => acc + curr.total, 0);
        const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

        await prisma.cart.update({
            where: {
                id: cartId
            },
            data: {
                totalItems: totalQuantity,
                totalAmount: totalAmount
            }
        });

        return {
            message: 'Cart item updated successfully'
        };
    } catch (error) {
        throw new Error(`Failed to edit cart item: ${error}`);
    }
    };



export const deleteCartItem = async (cartId, productId) => {
    try {
        await prisma.cartItem.deleteMany({
            where: {
                cartId: cartId,
                productId: productId
            }
        });
        const allCartItems = await prisma.cartItem.findMany({
            where: {
                cartId: cartId
            },
        });

        const totalAmount = allCartItems.reduce((acc, curr) => acc + curr.total, 0);
        const totalQuantity = allCartItems.reduce((acc, curr) => acc + curr.quantity, 0);

        await prisma.cart.update({
            where: {
                id: cartId
            },
            data: {
                totalAmount: totalAmount,
                totalItems: totalQuantity
            },
        });

        return {
            message: 'Cart item deleted successfully'
        };
    } catch (error) {
        throw new Error(`Failed to delete cart item: ${error}`);
    }
};