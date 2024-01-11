import React from "react";
import prisma from "@/utils/db";

const prismaHandler = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "Hello Developers",
  //   },
  // });
  const allTask = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTask;
};

const page = async () => {
  const tasks = await prismaHandler();

  if (tasks.length == 0) {
    return <h2 className="text-lg font-medium mt-8">No Task to show...</h2>;
  }
  return (
    <div>
      <h2 className="text-5xl text-center">Prisma</h2>
      {tasks.map((task) => {
        return (
          <h1 key={task.id} className="text-2xl py-2">
            {task.content}
          </h1>
        );
      })}
    </div>
  );
};

export default page;
