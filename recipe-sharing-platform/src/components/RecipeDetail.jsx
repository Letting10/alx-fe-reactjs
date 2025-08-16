import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl font-semibold">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Back Link */}
      <Link
        to="/"
        className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium mb-6 inline-block transition-colors duration-200"
      >
        &larr; Back to Home
      </Link>

      {/* Recipe Card */}
      <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-3xl shadow-2xl overflow-hidden transition-transform transform hover:scale-102 duration-300">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-t-3xl"
        />

        <div className="p-8 pl-12"> {/* Added extra left padding */}
          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-4 text-yellow-800">
            {recipe.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-green-700 border-b-2 border-green-400 inline-block pb-1">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1 mt-2 pl-4"> {/* Left padding for list */}
              {recipe.ingredients?.map((ingredient, idx) => (
                <li
                  key={idx}
                  className="hover:text-green-600 transition-colors duration-200"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Cooking Steps Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-purple-700 border-b-2 border-purple-400 inline-block pb-1">
              Cooking Steps
            </h2>
           <ol className="list-decimal list-inside text-gray-800 space-y-3 mt-2 pl-4">
  {recipe.instructions?.map((step, idx) => (
    <li key={idx} className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {step}
    </li>
  ))}
</ol>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
