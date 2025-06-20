import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

console.log("📦 DATABASE_URL:", process.env.DATABASE_URL);
