import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  // Use filteredRecipes if there's a search term, otherwise use all recipes
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '16px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;