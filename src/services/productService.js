import prisma from '../config/prisma.js';

export const createProduct = async (name, price, stock, description, categoryId, sellerId, images) => {
    try {
        const product = await prisma.product.create({
            data: {
                name,
                price,
                stock,
                description,
                categoryId,
                sellerId,
                images: {
                    create: images.map(image => ({
                        imageUrl: image.imageUrl
                    }))
                }
            }
        });
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

export const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                images: true
            }
        });
        return products;
    } catch (error) {
        throw new Error(error);
    }
};

export const getProductById = async (productId) => {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                images: true
            }
        });
        return product;
    } catch (error) {
        throw new Error(error);
    }
};

export const updateProduct = async (productId, newData) => {
    try {
        const updatedProduct = await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                name: newData.name,
                price: newData.price,
                stock: newData.stock,
                description: newData.description,
                categoryId: newData.categoryId,
                sellerId: newData.sellerId,
                images: { 
                    updateMany: newData.images.map(image => ({ 
                        where: {
                            id: image.id
                        },
                        data: {
                            imageUrl: image.imageUrl
                        } 
                    }))
                }
            },
            include: {
                images: true
            }
        });
        return updatedProduct;
    } catch (error) {
        console.error('Error updating product:', error);
        throw new Error('Failed to update product');
    }
}

export const deleteProduct = async (productId) => {
    try {
        const existingProduct = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: {
                images: true,
                carts: true
            }
        });

        if (!existingProduct) {
            throw new Error('Product not found');
        }
        const deleteCartItemPromises = existingProduct.carts.map(async (cart) => {
            await prisma.cartItem.deleteMany({
                where: {
                    cartId: cart.id,
                    productId: productId
                }
            });
        });
        await Promise.all(deleteCartItemPromises);
        const deleteImagePromises = existingProduct.images.map(async (image) => {
            await prisma.image.delete({
                where: {
                    id: image.id
                }
            });
        });
        await Promise.all(deleteImagePromises);
        await prisma.product.delete({
            where: {
                id: productId
            }
        });

        const allCartItems = await prisma.cartItem.findMany({
            where: {
                cartId: existingProduct.carts[0].cartId
            },
        });

        const totalAmount = allCartItems.reduce((acc, curr) => acc + curr.total, 0);
        const totalQuantity = allCartItems.reduce((acc, curr) => acc + curr.quantity, 0);

        console.log('ini total amount', totalAmount);
        console.log('ini total quantity', totalQuantity);


        const updateCartItemPromises = existingProduct.carts.map(async (cart) => {
            await prisma.cart.updateMany({
                where: {
                    id: cart.cartId,

                },
                data: {
                    totalAmount: totalAmount,
                    totalItems: totalQuantity
                }
            });
        });
        await Promise.all(updateCartItemPromises);

        return {
            message: 'Product and associated data deleted successfully'
        };
    } catch (error) {
        throw new Error(`Failed to delete product: ${error}`);
    }
};