 import React from 'react'
 import ReactDOM from 'react-dom'
import { BrowserRouter,
         Routes,
         Route 
} from 'react-router-dom'
// import { render } from 'react-dom'

import App from './components/App'
import Books from './components/Books'
import Requests from './components/Requests'
import Trades from './components/Trades'
import Users from './components/Users'
import Login from './components/Login'

  document.addEventListener('DOMContentLoaded', () => {
   ReactDOM.render(
     <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path = '/' element ={<App />}>
          <Route path = 'books' element ={<Books />} />      
          <Route path = 'trades' element ={<Trades />} />      
          <Route path = 'requests' element ={<Requests/>} />
          <Route path = 'users' element ={<Users />} />      
          <Route path = 'login' element = {<Login />} />          
        </Route>     
      </Routes>
     </BrowserRouter>,
     document.getElementById('app')
   )
 })