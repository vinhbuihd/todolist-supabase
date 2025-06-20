import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.todo.createMany({
    data: [
      { title: "Học Node.js" },
      { title: "Làm todo app với Next.js" },
      { title: "Ngủ sớm hơn 💤" },
    ],
  });
}

main().finally(() => prisma.$disconnect());
