import React from 'react'
import { useState } from 'react';
import { signOut ,signInWithPopup } from 'firebase/auth';
import { auth , provider } from './firebase';
import logo from '../assets/logo.webp'
import { Link, NavLink, useNavigate } from 'react-router-dom';
export const Header = () => {
    const [hidden ,setHidden]=useState(false);
    const [isAuth , setIsAuth]=useState(JSON.parse(localStorage.getItem("connected"))|| false)
    const navigate = useNavigate()
    function authentification(){
 
        signInWithPopup(auth, provider).then((data)=>{
          console.log(data)
          setIsAuth(true)
          localStorage.setItem("connected",true)
          navigate("/chat")
        })}

        const handelLogout =()=>{
            setTimeout(() => {
                signOut(auth)
                setIsAuth(false)
                localStorage.setItem("connected",false)
                navigate("/")
                console.log("is logedout")
            }, 1500);
           
        }
  return (
    <div>
        <nav className="bg-white  top-0 left-0 right-0  border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center">
        <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chatapp</span>
    </Link>
    <button onClick={()=> setHidden(!hidden)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    <div className={`${hidden ? "hidden" :""} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {isAuth ? (
         <>
        <li>
          <NavLink   to="/chat" className="block text-center py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Chat</NavLink>
        </li>
        <li>
         <button onClick={handelLogout}   className="block py-2 pl-3 pr-4 w-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
        </li>
         </>)
        :
        <li>
        <button onClick={()=>authentification()}  className="block py-2 pl-3 pr-4 w-full text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</button>
        </li> 
         }
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
