"use client";
import { deleteTask } from "@/utils/actions";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-error btn-xs" type="submit" disabled={pending}>
      {pending ? "pending" : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" value={id} name="id" />
      <SubmitBtn />
    </form>
  );
};

export default DeleteForm;
