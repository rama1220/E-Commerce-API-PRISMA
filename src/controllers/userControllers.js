import * as userService from '../services/userService.js';

export const createUserHandler = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            error: 'Failed to create user',
        });
    }
}

export const registerSellerHandler = async (req, res) => {
    try {
        const {
            userId,
            name,
            address,
            information
        } = req.body;
        const newshop = await userService.registerAsSeller({
            userId,
            name,
            address,
            information
        });
        res.status(201).json({
            message: 'Registered as seller successfully',
            shop: newshop
        });
    } catch (error) {
        console.error('Error registering as seller:', error);
        res.status(500).json({
            error: 'Failed to register as seller'
        });
    }
}

export const updateProfileHandler = async (req, res) => {
    const userId = parseInt(req.params.id);
    const newData = req.body;
    try {
        const updatedUser = await userService.updateProfile(userId, newData);
        res.status(200).json({
            message: 'Profile updated successfully',
            user: updatedUser
        });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({
            error: 'Failed to update profile'
        });
    }
}

export const loginUserHandler = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body
        const tokenData = await userService.loginUser(email, password)
        res.json(tokenData)
    } catch (error) {
        console.error('Error generating token:', error)
        res.status(401).json({
            message: error.message
        })
    }
}