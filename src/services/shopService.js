import prisma from '../config/prisma.js';
export const findShopByName= async (name) => {
    try {
        const shop = await prisma.shop.findFirst({
            where: {
                name: {
                    contains: name
                }
            }
        });
        return shop;
    } catch (error) {
        throw new Error('Failed to search for store by name');
    }
}

export const updateShopService= async (shopId, newData) => {
    try {
        const updatedShop = await prisma.shop.update({
            where: {
                id: shopId
            },
            data: newData
        });
        return updatedShop;
    } catch (error) {
        console.error('Error updating shop:', error);
        throw new Error('Failed to update shop');
    }
}