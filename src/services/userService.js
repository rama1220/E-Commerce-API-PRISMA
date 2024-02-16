import bcrypt from 'bcrypt'
import {config} from 'dotenv'
import jwt from 'jsonwebtoken';
import prisma from '../config/prisma.js';

config();

const bcryptRound = Number(process.env.BCRYPT_ROUNDS);

export const createUser= async (userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, bcryptRound);
        const nohp = parseInt(userData.nohp);

        const newUser = await prisma.user.create({
            data: {
                username: userData.username,
                fullname: userData.fullname,
                address: userData.address,
                nohp: nohp,
                email: userData.email,
                password: hashedPassword,
                roleId: userData.roleId,
            },
        });

        await prisma.cart.create({
            data: {
                userId: newUser.id,
                totalItems: 0, 
                totalAmount: 0, 
            },
        });

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user');
    }
}

export const registerAsSeller = async (userData) =>{
    try {
        const newShop = await prisma.shop.create({
            data: {
                name: userData.name,
                address: userData.address,
                information: userData.information,
                userId: userData.userId,
            },
        });
        await prisma.user.update({
            where: {
                id: userData.userId
            },
            data: {
                roleId: 2
            },
        });

        return newShop;
    } catch (error) {
        console.error('Error registering as seller:', error);
        throw new Error('Failed to register as seller');
    }
}

export const updateProfile = async (userId, userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, bcryptRound);
        const nohp = parseInt(userData.nohp);
        const updatedUser = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                username: userData.username,
                fullname: userData.fullname,
                address: userData.address,
                nohp: nohp,
                email: userData.email,
                password: hashedPassword,
                roleId: userData.roleId,
            }
        })
        return updatedUser
    } catch (error) {
        throw new Error(error)
    }
}
export const loginUser= async (email, password) =>{
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (!user) {
        throw new Error('Invalid email')
    }

    if (user.is_blocked) {
        throw new Error('User is blocked')
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword) {
        throw new Error('Invalid password')
    }

    const payload = {
        userId: user.id,
        email: user.email,
        name: user.name
    };

    const expired = new Date(Date.now() + 2592000000) // 30 days
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    await prisma.token.create({
        data: {
            token,
            userId: user.id,
            expire_at: expired
        }
    })

    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }
}
