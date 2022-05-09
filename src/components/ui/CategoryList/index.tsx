import React from 'react'
import { CategoryItem } from '../CategoryItem';
import { CategoryListDiv } from './CatgoryList';

export const CategoryList = () => {
  return (
    <CategoryListDiv>
        <h1>CategoryList</h1>
        <div style={{width:'auto',padding:'10px',display:'flex',flexWrap:'wrap',gap:20}}>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    </CategoryListDiv>
  )
}
