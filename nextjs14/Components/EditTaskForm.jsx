import { editTask } from "@/utils/actions";
import React from "react";

const EditTaskForm = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <>
      <form
        action={editTask}
        className="max-w-sm p-12 mt-4 border border-base-300 rounded-lg"
      >
        <input type="hidden" name="id" value={id} />
        {/* content */}
        <input
          type="text"
          required
          defaultValue={content}
          name="content"
          className="input input-bordered w-full"
        />
        {/* Completed */}
        <div className="form-control my-4">
          <label htmlFor="completed" className="label cursor-pointer">
            <span className="label-text">completed</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary checkbox-sm"
              defaultChecked={completed}
              id="completed"
              name="completed"
            />
          </label>
        </div>
        {/* button */}
        <button type="submit" className="btn btn-warning btn-block btn-sm">
          Edit
        </button>
      </form>
    </>
  );
};

export default EditTaskForm;
