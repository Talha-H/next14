import React from "react";
import Link from "next/link";
import Image from "next/image";

const DrinkList = ({ drinks }) => {
  return (
    <div>
      <ul className="grid sm:grid-cols-2 gap-6 mt-6">
        {drinks.map((drink) => {
          return (
            <li key={drink.idDrink}>
              <Link
                className="text-xl font-semibold"
                href={`/food/${drink.idDrink}`}
              >
                <div className="mb-4 h-48 relative">
                  <Image
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    fill
                    sizes="(max-width:768px)100vw (max-width:1200px) 50vw"
                    className="object-cover rounded-md"
                  />
                </div>
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
