import React from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

const page = () => {
  return (
    <div className="flex">
      <div className="flex justify-center items-center flex-col gap-y-8 mt-6">
        <h1 className="text-5xl text-center  font-semibold tracking-wide ">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p className="text-xl font-light text-center mx-8">
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <div className="flex gap-x-5">
          <Link href={"/state"} className="btn btn-accent">
            Get Started
          </Link>
          <Link href={"/food"} className="btn btn-success">
            See Components
          </Link>
        </div>
        <div className="flex gap-x-3 px-4 py-3 items-center rounded-xl border btn font-bold">
          <GoSearch size={20} />
          <input
            placeholder="Quick Search..."
            className="outline-none border-none bg-transparent tracking-wide "
          ></input>
        </div>
      </div>
    </div>
  );
};

export default page;
