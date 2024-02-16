import * as categoryService from '../services/categoryService.js';

export const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getCategoryById = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    try {
        const category = await categoryService.getCategoryById(categoryId);
        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const createCategory = async (req, res) => {
    const categoryData = req.body;
    try {
        const newCategory = await categoryService.createCategory(categoryData);
        res.status(201).json({
            message: 'Category created successfully',
            newCategory});
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const updateCategory = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    const categoryData = req.body;
    try {
        const updatedCategory = await categoryService.updateCategory(categoryId, categoryData);
        res.json({
            message: 'Category updated successfully',
            updatedCategory});
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

export const deleteCategory = async (req, res) => {
    const categoryId = parseInt(req.params.id);
    try {
        await categoryService.deleteCategory(categoryId);
        res.json({
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
