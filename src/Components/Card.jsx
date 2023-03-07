import React from 'react'

const Card = ({item}) => {
  return (
    <div key={item.id} className='card'>
        <img src={item.Imagen} className='card-img' alt="" />
        <h3>{item.Titulo}</h3>
    </div>
  )
}

export default Card
