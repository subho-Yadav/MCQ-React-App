import React from "react";
import { useState } from "react";
import {admins,users} from '../../data/appdata'
import MessageBox from "./MessageBox";

export default function LoginForm({portalStatus,setShowMessage,showMessage}) {
    
  const [userType, setUserType] = useState("Admin");
  
  const [formData,setFormData]=useState({
    userName:"Subho Yadav",
    password:"1234"
  })
  const changeUserType=()=>{
    userType=='Admin'?setUserType('User'):setUserType('Admin')
    portalStatus({user:false,admin:false})
    setFormData({userName:"",password:""})
  }
  const handleLogin=(event)=>{
    event.preventDefault()
    let user
    if(userType=='Admin'){
  user=admins.findIndex((e)=>e.userName===formData.userName && e.password===formData.password)
    }
    else{
    user=users.findIndex((e)=>e.userName===formData.userName && e.password===formData.password)
    }
  if(user==-1){
    setShowMessage({display:true,message:"Login Failure"})
  }else{
    setShowMessage({display:true,message:"Login Successful"})  
    if(userType==='Admin'){
        portalStatus({admin:true,user:false})
    }
    else{
        portalStatus({admin:false,user:true})
    }
  }
  setTimeout(()=>{
    setShowMessage({display:false,message:""})
  },2000)
  }
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-6 shadow mx-auto mt-5">
          <h2> {userType}</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label" htmlFor="userName">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                value={formData.userName}
                onChange={(event)=>setFormData({...formData,userName:event.target.value})}
                
              />
              <div id="emailHelp" className="form-text">
                Enter your user name above
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formData.password}
                onChange={(event)=>setFormData({...formData,password:event.target.value})}
              />
            </div>
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-6 mt-5">
            <button className="btn btn-danger"  onClick={changeUserType}>{userType==='Admin'?'User':'Admin'}</button>
          
          {
                  showMessage.display && <MessageBox message={showMessage.message}/>
          }
        </div>
        
      </div>
    </div>
  );
}
