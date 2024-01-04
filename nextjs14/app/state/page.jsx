"use client";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  const AddOne = () => {
    setCount(count + 1);
  };
  const SubOne = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className=" flex flex-col gap-y-3 justify-between items-center mt-6">
      <div className="text-center text-2xl">you Clicked {count} time </div>
      <div className="flex gap-x-5">
        <button
          onClick={AddOne}
          className="text-3xl font-semibold text-red-400"
        >
          +
        </button>
        <button
          onClick={SubOne}
          className="text-3xl font-semibold text-red-400"
        >
          -
        </button>
      </div>
      <button
        onClick={handleReset}
        className="text-xl py-1 px-2 rounded-2xl bg-slate-600 transition ease-in-out delay-150 text-white hover:text-black hover:bg-transparent"
      >
        Reset
      </button>
    </div>
  );
};

export default page;
