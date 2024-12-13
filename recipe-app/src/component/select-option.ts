const recipes = [
    { "id": 1, "name": "Spaghetti Carbonara" },
    { "id": 2, "name": "Margherita Pizza" },
    { "id": 3, "name": "Chicken Tikka Masala" },
    { "id": 4, "name": "Vegetable Stir Fry" },
    { "id": 5, "name": "Chocolate Chip Cookies" },
    { "id": 6, "name": "Caesar Salad" },
    { "id": 7, "name": "Beef Lasagna" },
    { "id": 8, "name": "Vegetable Lasagna" },
    { "id": 9, "name": "Thai Green Curry" },
    { "id": 10, "name": "Mushroom Risotto" }
  ];


  export const options = recipes.map(recipe => ({
    value: recipe?.id,  // Use the id as the value
    label: recipe?.name  // Replace spaces with '%20' for the label
  }));


