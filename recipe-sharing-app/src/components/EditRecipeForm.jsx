import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import { useState } from 'react';

function EditRecipeForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { recipes, editRecipe } = useRecipeStore((state) => ({
    recipes: state.recipes,
    editRecipe: state.editRecipe,
  }));

  const recipe = recipes.find((r) => r.id === id);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault(); 

    if (!title || !description) return;

    editRecipe({ id, title, description });
    navigate(`/recipes/${id}`);
  };

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Recipe</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditRecipeForm;
