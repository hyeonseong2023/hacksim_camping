import React, { useEffect, useState } from 'react'
import '../Login.css'
import axios from 'axios'
const Login = ({user_email, setUser_Email, user_pw,setUser_PW,user_nick, setUser_Nick }) => {

    
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
            <body>
                <div class="main">
                    <h1 class="logo">LOGIN</h1>
                    <div id="login_container">
                        <input type="text" value={user_email} onChange={handleUseremailChange}  placeholder="Email" id="id" class="account" />
                        <input type="password" value={user_pw} onChange={handleUserPwChange} placeholder="Password" id="password" class="account" />
                        <button onClick={handleLogin} id="login" class="account">login</button>
                        <p id="alert" class="account"> </p>
                        <hr/>
                        <div id='logintxt_container'>
                        <div id ='login_text'>SNS 로그인</div>
                        </div>
                        <div id='img_container'>
                        <img id='k' src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' />
                        <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
            </body>
        </div>

    )
}

export default Login