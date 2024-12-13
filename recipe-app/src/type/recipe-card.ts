interface Recipe {
    id: number;
    name: string;
    description: string; // Added description to match the usage in JSX
    ingredients: string[]; //Array with string data type
    instructions: string[];
    prep_time: string;
    cook_time: string;
    category: string;
    servings: number;
  }
  
  interface RecipeCardProps {
    recipe: Recipe; // Define the type of the recipe prop
  }

  export {RecipeCardProps}