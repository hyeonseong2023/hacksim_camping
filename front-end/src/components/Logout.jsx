import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const nav = useNavigate();
    
    useEffect(()=>{
    localStorage.removeItem("loginSuccess");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_pw");
    localStorage.removeItem("user_nick");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_joindate");
    nav('/')
},[])
    alert('로그아웃 되었습니다')
   
  return (
    <div>Logout</div>
  )
}

export default Logout