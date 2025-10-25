import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllData = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addNewData: ${error}`,
    });
  }
};
const addNewData = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        age,
      },
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in addNewData: ${error}`,
    });
  }
};
const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in deleteData: ${error}`,
    });
  }
};
const patchData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = await prisma.user.update({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in patchData: ${error}`,
    });
  }
};
const putData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = await prisma.user.update({
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
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in putData: ${error}`,
    });
  }
};
export default {
  getAllData,
  addNewData,
  deleteData,
  patchData,
  putData,
};
