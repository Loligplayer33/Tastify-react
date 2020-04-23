import React from 'react';
import s from './recipes.module.scss';
import RecipeCard from './RecipeCard';
// import Search from '../Search/apiSearch';

function Recipes() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1 className={s.heading}>Recipes for Everyone</h1>
        {/* styling border */}
        <div className={s.borderBottom}></div>
        <p className={s.content}>
          We are certain you will find something you like here
        </p>
      </header>
      <div className={s.recipesContainer}>
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
        <RecipeCard title="Title in here" />
      </div>
    </div>
  );
}

export default Recipes;
