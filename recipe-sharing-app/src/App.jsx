import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';

const App = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const dummyRecipes = [
      {
        id: 1,
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish with meat sauce.',
      },
      {
        id: 2,
        title: 'Chicken Curry',
        description: 'Spicy and flavorful Indian chicken curry.',
      },
      {
        id: 3,
        title: 'Beef Stew',
        description: 'Hearty stew with tender beef and vegetables.',
      },
      {
        id: 4,
        title: 'Vegetable Stir Fry',
        description: 'Quick and healthy mix of veggies and soy sauce.',
      },
      {
        id: 5,
        title: 'Pancakes',
        description: 'Fluffy pancakes perfect for breakfast.',
      },
    ];

    setRecipes(dummyRecipes);
  }, [setRecipes]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
