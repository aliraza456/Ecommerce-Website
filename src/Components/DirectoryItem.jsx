import React from 'react'
import './categories.styles.scss';


const DirectoryItem = ({ category }) => {
  return (

    <div className='directory-item-container'>
      <div className='background-image' style={{
        backgroundImage: `url(${category.imageUrl})`
      }} />
      <div className='body'>
        <h2>{category.name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;