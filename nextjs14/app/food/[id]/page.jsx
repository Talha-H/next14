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
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image src={imgSrc} width={500} height={500} alt="food-img" />
    </div>
  );
};

export default Singlepage;
