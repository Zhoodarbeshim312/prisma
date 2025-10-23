"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../../config/prisma"));
const getAllData = async (req, res) => {
    try {
        const user = await prisma_1.default.user.findMany();
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in addNewData: ${error}`,
        });
    }
};
const addNewData = async (req, res) => {
    try {
        const { name, age } = req.body;
        const user = await prisma_1.default.user.create({
            data: {
                name,
                age,
            },
        });
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in addNewData: ${error}`,
        });
    }
};
const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma_1.default.user.delete({
            where: {
                id: Number(id),
            },
        });
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in deleteData: ${error}`,
        });
    }
};
const patchData = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const user = await prisma_1.default.user.update({
            where: {
                id: Number(id),
            },
            data: {
                name,
                age,
            },
        });
        res.status(200).json({
            success: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            error: `Error in patchData: ${error}`,
        });
    }
};
exports.default = {
    getAllData,
    addNewData,
    deleteData,
    patchData,
};
//# sourceMappingURL=crud.controllers.js.map