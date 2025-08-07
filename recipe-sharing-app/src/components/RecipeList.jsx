import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  if (recipes.length === 0) return <p>No recipes yet.</p>;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <strong>{recipe.title}</strong>
            <br />
            {recipe.description}
            <br />
            <Link to={`/recipes/${recipe.id}`}>View</Link>
            {' | '}
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
            {' | '}
            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
