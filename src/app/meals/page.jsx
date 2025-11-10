import { Roboto } from "next/font/google";
import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
const roboto = Roboto({
  weight: ["700"],
  subsets: ["latin"],
});
// meta data

export const metadata = {
  title: "All Meals",
  description: "meals loaded for mealsDB api",
};

///////////
export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const search = query.search || "";
  console.log(search);

  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      // setMeals(data?.meals || []);
      return data?.meals || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const mealss = await fetchMeals();
  return (
    <div>
      {/* <p>{JSON.stringify(mealss)}</p> */}
      <div className="p-4">
        {/* input field */}
        <MealSearchInput></MealSearchInput>
        <div className="grid grid-cols-3 gap-5 ">
          {mealss?.length > 0 ? (
            mealss?.map((meal) => (
              <div
                key={meal.idMeal}
                className={`border rounded p-2 space-y-3 `}
              >
                <Image
                  src={meal?.strMealThumb || ""}
                  alt={meal.strMeal}
                  width={150}
                  height={150}
                  className="rounded"
                />
                <div className="">
                  <h2 className={roboto.className}>{meal.strMeal}</h2>
                  <p className="text-sm text-gray-400 h-50 overflow-auto">
                    {meal.strInstructions}
                  </p>
                  <Link href={`/meals/${meal.idMeal}`}>Details...</Link>
                </div>
              </div>
            ))
          ) : (
            <p>No meals found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
