"use server";
import prisma from "../utils/db";
import { revalidatePath } from "next/cache";

export const getAllTask = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (getData) => {
  const content = getData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
};
