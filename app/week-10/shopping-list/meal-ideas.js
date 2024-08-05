"use client"
import { useEffect, useState } from "react";
 
export default function MealIdeas({ingredient}){
    const[meals, setMeals] = useState([]);
 
    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals;
      };
   
      const loadMealIdeas = async () => {
        if (ingredient) {
          const fetchedMeals = await fetchMealIdeas(ingredient);
          setMeals(fetchedMeals);
        }
      };
   
      useEffect(() => {
        loadMealIdeas();
      }, [ingredient]);
   
      return (
        <div className="inline-block align-top bg-pink-600 flex-1 max-w-sm m-10">
          <h2 className="text-xl font-bold">Meal Ideas for {ingredient}</h2>
          <ul>
            {meals ? (
              meals.map((meal) => (
                <li key={meal.idMeal}>
                  <h3>{meal.strMeal}</h3>
                  <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
                </li>
              ))
            ) : (
              <p>No meal ideas found</p>
            )}
          </ul>
        </div>
      );
}