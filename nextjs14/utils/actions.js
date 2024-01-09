"use server";
import { redirect } from "next/navigation";
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

export const deleteTask = async (getData) => {
  const id = getData.get("id");
  await prisma.task.delete({
    where: { id },
  });
  revalidatePath("tasks");
};

export const getTask = async (id) => {
  return await prisma.task.findUnique({
    where: { id },
  });
};
export const editTask = async (getData) => {
  const id = await getData.get("id");
  const content = await getData.get("content");
  const completed = await getData.get("completed");
  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === "on" ? true : false },
  });
  redirect("/tasks");
};
