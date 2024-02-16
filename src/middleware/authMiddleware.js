import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import prisma from "../config/prisma.js";

config();

export const authToken = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({
            message: 'Token is required'
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.userId;
        console.log(decoded.userId);
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(401).json({
                message: 'User not found'
            });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
};

export const authorizePermission = (permission) => {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                message: 'Unauthorized'
            })
        }

        const permissionRecords = await prisma.permissionRole.findMany({
            where: {
                roleId: req.user.roleId
            },
            include: {
                permission: true
            }
        });

        const permissions = permissionRecords.map((record) => record.permission.name);

        console.log('looking for permission', permission);
        console.log('in permissions', permissions);

        if (!permissions.includes(permission)) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        }

        next();
    };
};
