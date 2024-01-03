import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Link href="/about">About</Link>
    </div>
  );
};

export default page;
