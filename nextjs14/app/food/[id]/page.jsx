import Image from "next/image";
import Link from "next/link";
import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleFetch = async (id) => {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Single fetch failed");
  }
  const data = await res.json();
  return data;
};

const Singlepage = async ({ params }) => {
  const data = await singleFetch(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href={"/food"} className="btn btn-success mb-12 mt-8">
        Back to Food Page
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      />
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};

export default Singlepage;
