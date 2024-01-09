"use client";
import React, { useEffect } from "react";
// import { createTask } from "@/utils/actions";
import { createCustomTask } from "@/utils/actions";
import toast from "react-hot-toast";
import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  message: null,
};

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-accent join-item"
      disabled={pending}
    >
      {pending ? "pending" : "Create Task"}
    </button>
  );
};
const TaskForm = () => {
  const [state, formAction] = useFormState(createCustomTask, initialState);
  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
      return;
    }
    if (state.message === "success") {
      toast.success("Task Created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full">
        <input
          type="text"
          placeholder="type here..."
          className="join-item input input-bordered w-full"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
