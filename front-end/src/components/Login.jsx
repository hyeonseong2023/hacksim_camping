import React, { useEffect, useState } from 'react'
import '../Login.css'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import GoogleLogin from './SNSLogin/google'
const Login = ({ }) => {


    const nav = useNavigate()

    //KAKAO 로그인

    const REDIRECT_URI = "http://localhost:3000/kakaocallback2";
    //혜주
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

    // const REST_API_KEY = 'c7cdf149cf26d90f317204cd9e5a046f';
    const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`


    //카카오 로그인 페이지로 이동
    const kakao_LoginHandler = () => {

        window.location.href = kakaoLink;


    }


    const [loginEmail, setLoginEmail] = useState('')
    const [loginPw, setLoginPw] = useState('')


    const handleUseremailChange = (e) => {
        setLoginEmail(e.target.value);

        console.log(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setLoginPw(e.target.value);

    }




    const handleLogin = async () => {

        const UserData = {
            user_email: loginEmail,
            user_pw: loginPw
        }
        try {
            const response = await axios.post('/gocamping/login', UserData)

            if (response.status === 200) {
                console.log('로그인 성공');

                const user = response.data; // 사용자 정보


                console.log(user);

                localStorage.setItem('loginSuccess', "Y")
                localStorage.setItem('user_email', user.user_email)
                // localStorage.setItem('user_pw', user.user_pw)
                localStorage.setItem('user_nick', user.user_nick)
                localStorage.setItem('user_role', user.user_role)
                localStorage.setItem('user_joindate', user.user_joindate)

                nav('/')

            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("EMAil 또는 PASWWORD를 확인해주세요")
                console.log('로그인 실패');
            }

        }
    };


  // sns 로그인 관련 함수
  const onSuccessHandler = res => {
    console.log(res)
}



    return (

        <div id='login-container'>

            <div className="main">
                <h1 className="logo">LOGIN</h1>
                <div id="login_container">
                    <div id = 'hjinput_container'>
                    <input type="text" value={loginEmail} onChange={handleUseremailChange} placeholder="Email" id="id" className="account" />
                    <input type="password" value={loginPw} onChange={handleUserPwChange} placeholder="Password" id="password" className="account" />
                    </div>
                    <button onClick={handleLogin} id="login" className="account">login</button>
                    <p id="alert" className="account"> </p>
                    <hr />
                    <div id='logintxt_container'>
                        <div id='login_text'>SNS 로그인</div>
                    </div>
                    <div id='img_container'>

                    <div className='img_container' onClick={kakao_LoginHandler}><img className = 'k' src={process.env.PUBLIC_URL + 'img/kakaologo.png'} />카카오 로그인</div>
                        {/* <img id='k' onClick={kakao_LoginHandler} src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' /> */}   
                    </div>
                    <div className="App">
                        <GoogleLogin
                            success={onSuccessHandler}
                            fail={res => console.log(res)}
                        />


                    </div>
                </div>
            </div>
            <script src="script.js"></script>


        </div>

    )
}

export default Login