import prisma from "../config/prisma.js";

export const getAllCategories = async () => {
    return await prisma.category.findMany({
        include: {
            products: true
        }
    });
};

export const getCategoryById = async (categoryId) => {
    return await prisma.category.findUnique({
        where: {
            id: categoryId
        },
        include: {
            products: true
        }
    });
};

export const createCategory = async (categoryData) => {
    return await prisma.category.create({
        data: categoryData
    });
};

export const updateCategory = async (categoryId, categoryData) => {
    return await prisma.category.update({
        where: {
            id: categoryId
        },
        data: categoryData
    });
};

export const deleteCategory = async (categoryId) => {
    return await prisma.category.delete({
        where: {
            id: categoryId
        }
    });
};
