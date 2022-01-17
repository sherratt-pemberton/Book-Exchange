import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function App () {
  return (
    <>
      <h1>Book Echange</h1>

      <nav>
         <Link to ="/books">Books</Link>
         <Link to ="/requests">Requests</Link>
         <Link to ="/trades">Trades</Link>
         <Link to ="/users">Users</Link>
      </nav>
      <nav>
         <Link to ="/login">Login</Link>
      </nav>
      <Outlet />
    </>
  )

}

export default App
