import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti', description: 'Classic spaghetti with tomato sauce' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy chicken curry with rice' },
    { id: 3, title: 'Avocado Toast', description: 'Healthy and quick breakfast option' },
  ],
  favorites: [],
  recommendations: [],

  addFavorite: (id) =>
    set((state) =>
      state.favorites.includes(id)
        ? state
        : { favorites: [...state.favorites, id] }
    ),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  generateRecommendations: () =>
    set((state) => {
      const nonFavorites = state.recipes.filter(
        (r) => !state.favorites.includes(r.id)
      );
      return { recommendations: nonFavorites.slice(0, 2) };
    }),
}));
