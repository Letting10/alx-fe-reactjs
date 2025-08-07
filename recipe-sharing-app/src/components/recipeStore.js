import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: '1', title: 'Spaghetti Bolognese', description: 'Classic Italian pasta dish' },
    { id: '2', title: 'Chicken Curry', description: 'Spicy Indian curry' },
    { id: '3', title: 'Vegetable Stir Fry', description: 'Quick and healthy veggies' },
  ],

  searchTerm: '',
  filteredRecipes: [],

  // Task 2: Search and Filter
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Task 3: View single recipe
  getRecipeById: (id) => {
    return get().recipes.find((recipe) => recipe.id === id);
  },

  // Task 3: Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Task 3: Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Task 3: Delete a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
}));
