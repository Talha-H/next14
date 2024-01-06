import React from "react";
import Link from "next/link";

const DrinkList = ({ drinks }) => {
  return (
    <div>
      <ul className="menu menu-vertical pl-0">
        {drinks.map((drink) => {
          return (
            <li key={drink.idDrink}>
              <Link
                className="text-xl font-semibold"
                href={`/food/${drink.idDrink}`}
              >
                {drink.strDrink}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DrinkList;
