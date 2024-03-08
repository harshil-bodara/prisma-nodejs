import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getUsersHandler(req: Request, res: Response) {
    try {
        const users = await prisma.user.findMany();
        return res
            .status(200)
            .json({ data: users });
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
}