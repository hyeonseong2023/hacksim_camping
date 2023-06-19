import React from 'react'
import '../Login.css'
import axios from 'axios'
const Join = ({user_email, setUser_Email, user_pw,setUser_PW,user_nick, setUser_Nick }) => {


    const handleUseremailChange = (e) => {
        setUser_Email(e.target.value);
        console.log(e.target.value);
        setUser_Nick(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setUser_PW(e.target.value);
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();

        const requestData = {
            user_email: user_email,
            user_pw: user_pw,
            user_nick: user_nick
        };


        //회원가입 데이터를 서버로 전송
        axios.post("/gocamping/join", requestData)
            .then((res) => {
                console.log(res);
                console.log("이메일 = ", requestData.user_email);
                console.log("PW =  ", requestData.user_pw);
                console.log("nick =  ", requestData.user_nick);
                alert(user_email+'님 회원가입을 축하드립니다😉')
            })
            .catch(error => {
                console.error(error); // 오류 발생 시 에러 로그를 출력
                alert('회원가입 실패😥')
            });

    };

    return (
        // <div id='container'>
        <div id='login-container'>
            <body>
                <div class="main">
                    <h1 class="logo">회원가입</h1>
                    <div id="login_container">
                        {/* <div id='emailcontainer'> */}
                        <input type="text" value={user_email} onChange={handleUseremailChange}  placeholder="Email" id="id" class="account"></input>
                        <a class="underline-btn" href="#">중복확인</a>
                        {/* </div> */}
                        <input type="password" value={user_pw} onChange={handleUserPwChange} placeholder="Password" id="password" class="account" />
                        <button onClick={handleFormSubmit} id="login" class="account">회원가입</button>
                        <p id="alert" class="account"> </p>
                        <hr/>
                        <div id='logintxt_container'>
                        <div id ='login_text'>SNS 회원가입</div>
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
        // </div>
    )
}

export default Join