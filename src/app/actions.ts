"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../../lib/prisma";

export const addTodo = async (formData: FormData) => {
  const title = formData.get("title")?.toString();
  if (!title || title.trim() === "") return;

  await prisma.todo.create({
    data: { title: title.trim() },
  });

  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  const todo = await prisma.todo.findUnique({ where: { id } });
  await prisma.todo.update({
    where: { id },
    data: { completed: !todo?.completed },
  });

  revalidatePath("/");
};

export const deleteTodo = async (id: number) => {
  await prisma.todo.delete({ where: { id } });

  revalidatePath("/");
};
