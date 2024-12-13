'use client'

import { RecipeCardProps } from '@/type/recipe-card';
import React from 'react';
const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe?.name}</h2>
      <p className="text-gray-600 mb-4">{recipe?.description}</p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredients:</h3>
        <ul className="list-disc pl-5">
          {recipe?.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Instructions:</h3>
        <ol className="list-decimal pl-5">
          {recipe?.instructions?.map((instruction, index) => (
            <li key={index} className="text-gray-700">{instruction}</li>
          ))}
        </ol>
      </div>

      <div className="text-gray-600">
        <p><strong>Prep Time:</strong> {recipe?.prep_time}</p>
        <p><strong>Cook Time:</strong> {recipe?.cook_time}</p>
        <p><strong>Category:</strong> {recipe?.category}</p>
        <p><strong>Servings:</strong> {recipe?.servings}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
