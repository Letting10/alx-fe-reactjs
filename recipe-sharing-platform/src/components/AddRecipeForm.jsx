import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    else if (ingredients.split(',').length < 2)
      newErrors.ingredients = 'Enter at least 2 ingredients, separated by commas';
    if (!steps.trim()) newErrors.steps = 'Steps are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients.split(',').map((i) => i.trim()),
      instructions: steps.split('.').map((i) => i.trim()).filter(Boolean),
      summary: steps.substring(0, 100) + '...',
      image: 'https://via.placeholder.com/300x200',
    };

    onAddRecipe(newRecipe);
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 md:p-8 bg-white rounded-3xl shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-yellow-800">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="md:flex md:items-center md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/4">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full md:w-3/4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        </div>
        {errors.title && <p className="text-red-500 mt-1 md:ml-1">{errors.title}</p>}

        {/* Ingredients */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/4">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="3"
            className={`w-full md:w-3/4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
        </div>
        {errors.ingredients && <p className="text-red-500 mt-1 md:ml-1">{errors.ingredients}</p>}

        {/* Steps */}
        <div className="md:flex md:items-start md:space-x-4">
          <label className="block text-gray-700 font-medium mb-2 md:w-1/4">Steps (separate by periods)</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className={`w-full md:w-3/4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
        </div>
        {errors.steps && <p className="text-red-500 mt-1 md:ml-1">{errors.steps}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 md:px-8 md:py-4"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
