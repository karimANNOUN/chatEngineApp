import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Chat } from './components/Chat'
import { Home } from './components/Home'
import {ProtectedRoute} from './ProtectedRoute'
import { PageNotFound } from './components/PageNotFound'
export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='chat' element={<ProtectedRoute><Chat/></ProtectedRoute>} />
        <Route path='*' element={<PageNotFound/>} />
        </Routes>

    </div>
  ) 
}
