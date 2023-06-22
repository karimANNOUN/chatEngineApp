import React from 'react'
import { useState } from 'react';
import { signOut ,signInWithPopup } from 'firebase/auth';
import { auth , provider } from './firebase';
export const Login = () => {
    const [isAuth , setIsAuth]=useState(JSON.parse(localStorage.getItem("connected"))|| false)
    function authentification(){
 
        signInWithPopup(auth, provider).then((data)=>{
          console.log(data)
          setIsAuth(true)
          localStorage.setItem("connected",true)
        })}

        const handelLogout =()=>{
            setTimeout(() => {
                signOut(auth)
                setIsAuth(false)
                localStorage.setItem("connected",false)
                console.log("is logedout")
            }, 2000);
           
           
           }
  return (
    <div>
        <button onClick={()=>authentification()} >singnIn</button>
        <button onClick={handelLogout} >logout</button>
    </div>
  )
}
