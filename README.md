Here's the MDX code for the complete `README.md` content:

```mdx
# Recipe App

This is a Recipe App built with [Next.js](https://nextjs.org) that utilizes [TanStack Query](https://tanstack.com/query/latest) to fetch recipes from a mock API. The application allows users to select recipes and view their details.

## Features

- Fetch recipes using TanStack Query
- User-friendly recipe selection dropdown
- Display recipe details including ingredients and instructions
- Responsive design for mobile and desktop
- Mock API using `json-server` to simulate backend data

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/recipe-app.git
   cd recipe-app
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Install `json-server` to mock the backend:**

   `json-server` will be used to create a simple mock API for fetching recipes.

   ```bash
   npm install -g json-server
   ```

4. **Set up `json-server` configuration:**

   Create a `db.json` file in the root of the project to hold the mock data for recipes. The structure of the `db.json` should look like this:

   ```json
   {
     "recipes": [
       {
         "id": 1,
         "name": "Spaghetti Bolognese",
         "description": "A classic Italian pasta dish with a rich and savory sauce.",
         "ingredients": [
           "Spaghetti",
           "Ground beef",
           "Tomato sauce",
           "Onion",
           "Garlic",
           "Carrot"
         ],
         "instructions": [
           "Boil the spaghetti according to package instructions.",
           "In a pan, cook ground beef until browned.",
           "Add chopped onions, garlic, and carrot, and sauté until softened.",
           "Add tomato sauce and simmer for 20 minutes.",
           "Serve the sauce over the spaghetti."
         ],
         "prep_time": "10 minutes",
         "cook_time": "30 minutes",
         "category": "Pasta",
         "servings": 4
       },
       {
         "id": 2,
         "name": "Chicken Curry",
         "description": "A flavorful chicken curry with a blend of spices.",
         "ingredients": [
           "Chicken",
           "Curry powder",
           "Coconut milk",
           "Onion",
           "Garlic",
           "Ginger"
         ],
         "instructions": [
           "In a pot, cook chicken until browned.",
           "Add onions, garlic, and ginger, and sauté until fragrant.",
           "Stir in curry powder and cook for 2 minutes.",
           "Add coconut milk and simmer for 20 minutes.",
           "Serve with rice."
         ],
         "prep_time": "15 minutes",
         "cook_time": "30 minutes",
         "category": "Curry",
         "servings": 4
       }
     ]
   }
   ```

5. **Start the mock API server:**

   Once the `db.json` file is set up, you can run `json-server` to start the mock API server:

   ```bash
   json-server --watch db.json --port 5000
   ```

   This will start a local server on `http://localhost:5000` and expose the recipes at `http://localhost:5000/recipes`.

### Configuring TanStack Query to Fetch Recipes

1. In the project, ensure that TanStack Query is installed:

   ```bash
   npm install @tanstack/react-query
   ```

2. Create a `useRecipes` hook to fetch the recipes from the mock API. In the `hooks/useRecipes.ts` file:

   ```ts
   import { useQuery } from '@tanstack/react-query';

   const fetchRecipes = async () => {
     const response = await fetch('http://localhost:5000/recipes');
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     return response.json();
   };

   export const useRecipes = () => {
     return useQuery(['recipes'], fetchRecipes);
   };
   ```

3. **Using the `useRecipes` hook in your components:**

   In your main component or wherever you want to display the recipe list, use the `useRecipes` hook:

   ```tsx
   import { useRecipes } from '@/hooks/useRecipes';
   import RecipeCard from './RecipeCard';

   const RecipeList = () => {
     const { data, isLoading, error } = useRecipes();

     if (isLoading) return <div>Loading...</div>;
     if (error instanceof Error) return <div>Error: {error.message}</div>;

     return (
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {data?.map((recipe: any) => (
           <RecipeCard key={recipe.id} recipe={recipe} />
         ))}
       </div>
     );
   };

   export default RecipeList;
   ```

### Running the Application

1. **Start the Next.js development server:**

   ```bash
   npm run dev
   ```

   This will start the application on `http://localhost:3000`.

2. Open your browser and navigate to `http://localhost:3000`. You should be able to see the recipe list fetched from the mock API, and the `RecipeCard` components will display the recipe details.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
