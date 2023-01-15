import React from 'react'
import LoginForm from './components/LoginForm'
import UserPortal from './components/UserPortal'
import AdminPortal from './components/AdminPortal'
import {useState} from 'react'



export default function App() {
  const [showMessage,setShowMessage]=useState({display:false,message:""})
  const [showPortal,setShowPortal]=useState({admin:false,user:false})
  return (
    <>
    <LoginForm portalStatus={setShowPortal} setShowMessage={setShowMessage} showMessage={showMessage} ></LoginForm>
    {
      showPortal.user && <UserPortal></UserPortal>
    }
    {
      showPortal.admin && <AdminPortal setShowMessage={setShowMessage} ></AdminPortal>
    }
    </>
  )
}
