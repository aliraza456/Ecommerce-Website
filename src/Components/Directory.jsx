import React from 'react'
import DirectoryItem from './DirectoryItem'
import './categories.styles.scss';

const Directory = () => {
  const categories = [
    {
      "id": 1,
      "name": "Hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "name": "Jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "name": "Sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "name": "Womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "name": "Mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return (<DirectoryItem category={category} key={category.id} />)
      })}
    </div>

  )
}

export default Directory