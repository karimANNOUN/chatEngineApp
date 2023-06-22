import React, {  useEffect, useState } from 'react'
import { auth } from './firebase'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ChatEngine,ChatFeed,ChatList, ChatCard, NewChatForm, ChatHeader, IceBreaker, MessageBubble, IsTyping, NewMessageForm,
ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings , ScrollDownBar  } from 'react-chat-engine'



export const Chat = () => {
 
  const navigate = useNavigate();
const [loading , setLoading]=useState(true)
const [user , setUser]=useState({})
// eslint-disable-next-line 

// blob adi function nestakhdmoha m fichier type file bah nglboha format binaire
const getFile=async(url)=> {
  const response = await fetch(url)
  const data = await response.blob()
  return new File([data],"userPhoto.jpg", {type:"image/jpeg"}     )
}
useEffect(()=>{
  setUser(auth.currentUser)
  if(!user){
      navigate('/')
    return
  }
  axios.get('https://api.chatengine.io/users/me/',{
    headers:{
      "Project-ID":process.env.REACT_APP_CHAT_ENGINE_ID ,
      'PRIVATE-KEY': process.env.REACT_APP_CHAT_ENGINE_KEY,
      "User-Name": user.email,
      "User-Secret":  user.uid,
    }
  })
  .then(()=>{
       setLoading(false)
  })
  .catch(()=>{
    const formData = new FormData()
    formData.append('email',user.email)
    formData.append('username',user.email)
    formData.append('secret',user.uid)
    getFile(user.photoURL)
    .then((avatar)=>{
      formData.append('avatar',avatar,avatar.name);
      axios.post('https://api.chatengine.io/users/',
      formData,
      {headers:{"private-key":process.env.REACT_APP_CHAT_ENGINE_KEY}}
      )
      .then(()=> setLoading(false))
      .catch((error)=>console.log(error))

    })
   
  })
  
  // eslint-disable-next-line
},[user])

if(!user || loading) return '...loading' ;
    
  return (
    <section >
      <div className='  h-screen mt-4 '>
      <ChatEngine
      height="92vh"
			projectID= {process.env.REACT_APP_CHAT_ENGINE_ID}
			userName={user.email}
			userSecret={user.uid}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
      renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
      renderNewChatForm={(creds) => <NewChatForm creds={creds} />} 
           
      renderChatHeader={(chat) => <ChatHeader chat={chat} />}
      renderIceBreaker={(chat) => <IceBreaker chat={chat}  />}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
      renderIsTyping={(typers) => <IsTyping typers={typers} />}
      renderScrollDownBar={(chat) => <ScrollDownBar chat={chat} /> }
      renderNewMessageForm={(creds, chatID) => <NewMessageForm creds={creds} chatID={chatID} />}
      renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
      renderChatSettingsTop={(creds, chat) => <ChatSettingsTop creds={creds} chat={chat}   />}
      renderPeopleSettings={(creds, chat) => <PeopleSettings creds={creds} chat={chat}  />}
      renderPhotosSettings={(chat) => <PhotosSettings chat={chat} />}
      renderOptionsSettings={(creds, chat) => <OptionsSettings creds={creds} chat={chat} />}

     
		/>
      </div>
     
</section>
   
  )
}
