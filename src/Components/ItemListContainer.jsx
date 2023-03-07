import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import Loading from './Loading';
import { useCartContext } from '../Context';

const ItemListContainer = () => {

  const { loading, funcionLoading, fetchFB} = useCartContext()

  useEffect(() => {
    funcionLoading()
    fetchFB()
  }, [])


  return (
    <div>
      {loading ? 
      <>
        <h2>Lista de Productos</h2>
        <ItemList/>
      </>
        : <Loading/>
      }
    </div>
  )
}

export default ItemListContainer
