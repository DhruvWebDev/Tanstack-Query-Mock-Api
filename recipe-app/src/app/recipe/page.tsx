'use client';
import { fetchRecipe } from "@/api/recipeApi";
import { useQuery } from "@tanstack/react-query";
import { options } from "@/component/select-option";
import Select from "react-select";
import { useState } from "react";
import RecipeCard from "@/component/recipe-card";

type OptionType = {
  value: string; 
  label: string;
};

export default function Page() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);


  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", selectedOption?.value], 
    queryFn: () => fetchRecipe(selectedOption?.value), 
    enabled: !!selectedOption, 
    staleTime: Infinity,
  });

  
  const handleSelectChange = (selectedOption: OptionType | null) => {
    setSelectedOption(selectedOption); 
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading recipes</div>;

  return (
    <div>
      <Select
        options={options} 
        onChange={handleSelectChange} 
        placeholder="Search for a recipe..."
        isServerRendered
      />
      <div>
        <h3>Recipes:</h3>
        {data && data.length > 0 ? (
          data.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        ) : (
          <div>No recipes found.</div>
        )}
      </div>
    </div>
  );
}
