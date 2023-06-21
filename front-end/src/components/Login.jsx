import React, { useEffect, useState } from 'react'
import '../Login.css'
import axios from 'axios'
const Login = ({user_email, setUser_Email, user_pw,setUser_PW,user_nick, setUser_Nick }) => {



//KAKAO 로그인
   
const REDIRECT_URI = "http://localhost:3000/kakaocallback2";
const REST_API_KEY = 'c7cdf149cf26d90f317204cd9e5a046f';
const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`  


//카카오 로그인 페이지로 이동
const kakao_LoginHandler = () => {

    window.location.href = kakaoLink;

    
}


    
    const handleUseremailChange = (e) => {
        setUser_Email(e.target.value);
        console.log(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setUser_PW(e.target.value);
    }



    const handleLogin = async ()=>{

        const UserData={
            user_email: user_email,
            user_pw: user_pw
        }
        try{
        const response = await axios.post('/gocamping/login',UserData)
    
        if (response.status === 200) {
            console.log('로그인 성공');

            const user = response.data; // 사용자 정보

            // 사용자 정보를 처리하는 로직 추가
            console.log('사용자 정보:', user);

          } 
        }catch(error){
          if (error.response && error.response.status===401)  {
            alert("EMAil 또는 PASWWORD를 확인해주세요")
            console.log('로그인 실패');
          }
        }
    };



    

    return (
 
        <div id='login-container'>
          
                <div className="main">
                    <h1 className="logo">LOGIN</h1>
                    <div id="login_container">
                        <input type="text" value={user_email} onChange={handleUseremailChange}  placeholder="Email" id="id" className="account" />
                        <input type="password" value={user_pw} onChange={handleUserPwChange} placeholder="Password" id="password" className="account" />
                        <button onClick={handleLogin} id="login" className="account">login</button>
                        <p id="alert" className="account"> </p>
                        <hr/>
                        <div id='logintxt_container'>
                        <div id ='login_text'>SNS 로그인</div>
                        </div>
                        <div id='img_container'>
                        <img id='k' onClick={kakao_LoginHandler} src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' />
                        <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
      
        </div>

    )
}

export default Login