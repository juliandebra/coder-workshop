import { createContext, useContext, useEffect, useState } from "react";
import db from './firebaseConfig';
import {collection, doc, getDocs}  from 'firebase/firestore';

const CartContext = createContext()

const Context = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [items, setItems] = useState(0)
    const [data, setData] = useState([])
    
    const funcionLoading = () => {
        setTimeout(() => {
            setLoading(true)
          }, 2000)
    }

    const fetchFB = async () => {
        const data = await getDocs(collection(db, 'Peliculas'))
        setData(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }

    return (
        <CartContext.Provider value={{
            cart, setCart,
            total, setTotal,
            loading, funcionLoading,
            fetchFB, data
            }}>
            {children}
        </CartContext.Provider>
    )
}
export default Context

export const useCartContext = () => useContext(CartContext)
