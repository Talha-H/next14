import React from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  // Throw an error
  if (!response.ok) {
   throw new Error('Data not fetched')
  }

  const db=await response.json();
  return db;
};

const page = async () => {
  const db = await fetchDrinks();
  console.log(db);
  return <div className="text-center">Food</div>;
};

export default page;
