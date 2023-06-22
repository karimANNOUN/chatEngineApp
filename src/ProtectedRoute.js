import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const Connected = JSON.parse(localStorage.getItem("connected")) 
  return Connected ? children : <Navigate to="/"/>
}
