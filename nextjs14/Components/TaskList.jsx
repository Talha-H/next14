import React from "react";
import Link from "next/link";
import DeleteForm from "../Components/DeleteForm";
import { getAllTask } from "../utils/actions";

const TaskList = async () => {
  const tasks = await getAllTask();
  if (tasks.length == 0) {
    return <h2 className="text-lg font-medium mt-8">No Task to show...</h2>;
  }
  return (
    <ul className="max-w-lg mt-6">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 border border-base-300 shadow-lg rounded-xl"
          >
            <h2
              className={`text-lg capitalize ${
                task.completed ? "line-through" : null
              }`}
            >
              {task.content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link href={`tasks/${task.id}`} className="btn btn-accent btn-xs">
                edit
              </Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
