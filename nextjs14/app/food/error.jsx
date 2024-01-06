"use client";
import React from "react";

const error = (error) => {
  console.log(error);
  return <div className="text-3xl">{error.error.message}</div>;
};

export default error;
