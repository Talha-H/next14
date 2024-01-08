import { deleteTask } from "@/utils/actions";
import React from "react";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" value={id} name="id" />
      <button className="btn btn-error btn-xs"> Delete</button>
    </form>
  );
};

export default DeleteForm;
