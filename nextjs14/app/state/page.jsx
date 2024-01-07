"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GrSubtractCircle } from "react-icons/gr";
import { GrPowerReset } from "react-icons/gr";




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
        <button onClick={AddOne} className="btn btn-success">
          <FaPlus size={24} />
        </button>
        <button onClick={SubOne} className="btn btn-info">
          <GrSubtractCircle size={24} />
        </button>
      </div>
      <button onClick={handleReset} className=" flex btn btn-error gap-x-4">
        Reset
        <GrPowerReset size={24}/>
      </button>
    </div>
  );
};

export default page;
