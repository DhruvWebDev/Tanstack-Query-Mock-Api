'use client';
import { fetchRecipe } from "@/app/api/recipeApi";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/component/select-option";
import Select from 'react-select';
import { useState } from "react";
import RecipeCard from "@/component/recipe-card";

export default function Page() {
  // Track the selected option using useState
  const [selectedOption, setSelectedOption] = useState(null);

  // Use React Query to fetch data based on the selected recipe id
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", selectedOption?.value],  // Include selected recipe ID in the query key
    queryFn: () => fetchRecipe(selectedOption?.value), // Fetch data using the selected recipe id
    enabled: !!selectedOption, // Ensure query is only triggered when a recipe is selected
    staleTime: Infinity,
  });

  // Handle change in selected option
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);  // Update the selected option in state
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipes</div>;

  return (
    <div>
      <Select
        options={options}  // Ensure options have { label, value }
        onChange={handleSelectChange}  // Pass the selected option to the handler
        placeholder="Search for a recipe..."
        isServerRendered
      />
      <div>
        <h3>Recipes:</h3>
        {/* Check if data exists and is not empty */}
        {data && data.length > 0 ? (
          <RecipeCard  recipe={data[0]}/>
        ) : (
          <div>No recipes found.</div>  // Message if data is empty or unavailable
        )}
      </div>
    </div>
  );
}