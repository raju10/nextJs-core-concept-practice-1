// generate meta data here

export async function generateMetadata({ params }) {
  // read route params
  const { id } = await params;
  console.log(id);
  // fetch data
  const [singleMeal] = await fetchSingleMeals(id);
  console.log("single meal==>", singleMeal.strMeal);
  return {
    title: singleMeal.strMeal,
    description: singleMeal.strInstructions,
  };
}
//////////////////////////////
const fetchSingleMeals = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    // setMeals(data?.meals || []);
    return data?.meals || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
//   ////////////
export default async function SingleMealPage({ params }) {
  const p = await params;
  console.log(p);

  const singleMeal = await fetchSingleMeals(p?.id);
  return (
    <div>
      <p>{JSON.stringify(singleMeal)}</p>
    </div>
  );
}
