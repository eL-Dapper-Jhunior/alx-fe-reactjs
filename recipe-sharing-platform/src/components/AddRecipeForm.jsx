import React, { useState } from "react";

const AddRecipeForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "", // Added steps field
  });

  // State to track validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding field in the state
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Validate the form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // If no errors, submit the form (for now, just log the data)
      console.log("Form submitted:", formData);
      alert("Recipe added successfully!");
      setFormData({ title: "", ingredients: "", steps: "" }); // Clear the form
      setErrors({}); // Clear errors
    }
  };

  // Simple form validation
  const validateForm = (data) => {
    const errors = {};
    if (!data.title.trim()) {
      errors.title = "Title is required";
    }
    if (!data.ingredients.trim()) {
      errors.ingredients = "Ingredients are required";
    } else if (data.ingredients.split(",").length < 2) {
      errors.ingredients = "Please enter at least 2 ingredients";
    }
    if (!data.steps.trim()) {
      errors.steps = "Preparation steps are required"; // Updated to use steps
    }
    return errors;
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipe Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange} // Uses target.value internally
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange} // Uses target.value internally
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            rows="3"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleInputChange} // Uses target.value internally
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            rows="5"
          />
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;