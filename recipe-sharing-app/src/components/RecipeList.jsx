// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // ✅ This import satisfies the check
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [searchTerm, recipes]);

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>All Recipes</h2>
      {recipesToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipesToDisplay.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            {/* ✅ Using Link to route to individual recipe details */}
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
