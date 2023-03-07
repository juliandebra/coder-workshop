import React from 'react'
import { useCartContext } from '../Context'
import Card from './Card'

const ItemList = () => {
  const {data} = useCartContext()
  return (
    <div>
      {data.map(item => <Card item={item} />)}
    </div>
  )
}

export default ItemList
