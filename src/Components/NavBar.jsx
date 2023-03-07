import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [user, setUser] = useState({
    email: '',
    pass: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user, 
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/category/peliculas'>Peliculas</Link>
      <Link to='/category/series'>Series</Link>
      <Link to='/cart'>Carrito</Link>

      <label >Email</label>
      <input name='email' type="email" onChange={handleChange}/>
      <label >Pass</label>
      <input name='pass' type="password" onChange={handleChange}/>

      <h3>{user.email}</h3>
      <h3>{user.pass}</h3>
    </div>
  )
}

export default NavBar
