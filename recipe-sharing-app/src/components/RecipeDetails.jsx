import React from 'react';
import { useParams } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add more details here, such as ingredients, instructions, etc. */}
    </div>
  );
};

export default RecipeDetail;