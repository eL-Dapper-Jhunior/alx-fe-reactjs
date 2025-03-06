import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe by ID
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Set the entire recipes list (initialize or replace)
  setRecipes: (recipes) => set({ recipes }),

  // Add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate recommendations based on favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (recipe) => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },

  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;