import React, { useEffect, useState } from 'react'
import { useCartContext } from '../Context'
import Loading from './Loading'

const CartWidget = () => {
  const {loading, funcionLoading} = useCartContext()

  useEffect(() => {
    funcionLoading()
  }, [])

  return (
    <div>
      {loading ? <h2>Elementos Comprados</h2> : <Loading/>}
      
    </div>
  )
}

export default CartWidget
