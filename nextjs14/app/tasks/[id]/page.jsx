import EditTaskForm from "@/Components/EditTaskForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const EditTask = async ({ params }) => {
  const task = await getTask(params.id);
  // console.log(params);
  return (
    <>
      <div className="mb-16">
        <Link href={"/tasks"} className="btn btn-accent">
          Go Back
        </Link>
        <EditTaskForm task={task} />
      </div>
    </>
  );
};

export default EditTask;
