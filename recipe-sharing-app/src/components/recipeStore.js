import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy Indian curry' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'Quick and healthy veggies' },
  ],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
