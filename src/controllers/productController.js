import * as productService from '../services/productService.js';
export const createProduct = async (req, res) => {
    try {
        const {
            name,
            price,
            stock,
            description,
            categoryId,
            sellerId,
            images
        } = req.body;
        const product = await productService.createProduct(name, price, stock, description, categoryId, sellerId, images);

        res.status(201).json({
            message: 'Product created successfully',
            product
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to create product'
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getProductById = async (req, res) => {
    const productId = parseInt(req.params.id);
    try {
        const product = await productService.getProductById(productId);
        if (!product) {
            res.status(404).json({
                message: 'Product not found'
            });
        }
         res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateProduct = async (req, res) => {
    const productId = parseInt(req.params.id);
    const newData = req.body;
    try {
        const updatedProduct = await productService.updateProduct(productId, newData);
        res.status(200).json({
            message: 'Product updated successfully',
            updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);
        const result = await productService.deleteProduct(productId);
        res.status(200).json({result});
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error.message || "Internal server error",
        });
    }
};