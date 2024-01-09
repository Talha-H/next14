import React from "react";
import { createTask } from "@/utils/actions";


const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here..."
          className="join-item input input-bordered w-full"
          name="content"
          required
        />
        <button type="submit" className="btn btn-accent join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
