import React from 'react'
import { Routes, Route } from 'react-router-dom'
import User from './components/getuser/User'
import Add from './components/adduser/Add';
import Edit from './components/updateuser/Edit';
import "./App.css"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<User/>} />
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>} />

      </Routes>

    </div>
  )
}

export default App
