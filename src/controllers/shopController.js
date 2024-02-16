import { findShopByName, updateShopService } from "../services/shopService.js";

export async function getShopByName(req, res) {
    const {
        name
    } = req.query;
    try {
        const shop = await findShopByName(name);
        if (!shop) {
            return res.status(404).json({
                message: 'Shop Not Found'
            });
        }
        return res.status(200).json(shop);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateShop = async (req, res) => {
    const shopId = parseInt(req.params.id);
    const newData = req.body;
    try {
        const updatedShop = await updateShopService(shopId, newData);
        res.status(200).json({
            message: 'Shop updated successfully',
            updatedShop
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};