import React, { useEffect } from 'react'
import '../login2.css';
import axios from 'axios'
const Login02 = ({inputEmail,setInputEmail,inputPw,setInputPw,inputNick, setInputNick}) => {

    
    const handleUseremailChange = (e)=>{
        setInputEmail(e.target.value);
        console.log(e.target.value);
        setInputNick(e.target.value);
    }


    const handleUserPwChange = (e)=>{
        console.log(e.target.value);
        setInputPw(e.target.value);
    }
    
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const requestData = {
            inputEmail: inputEmail,
            inputPw: inputPw,
            inputNick : inputNick
          };
        
        
        //회원가입 데이터를 서버로 전송
        axios.post("/gocamping/join", requestData)
        .then((res) => {
        console.log(res);
        console.log("이메일 = ", requestData.inputEmail);
        console.log("PW =  ", requestData.inputPw);
        console.log("nick =  ", requestData.inputNick);

        alert('데이터 전송 성공')
        })
        .catch(error => {
        console.error(error); // 오류 발생 시 에러 로그를 출력
        alert('데이터 전송 실패')
        });

    };
      







    return (
        <div>
            <div className='container'>
                <div className='body'>
            <div id="main-holder">
                <h1 id="login-header" style={{position:"relative"}}>Login</h1>
                 <img id='k'src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' style={{width:"17px", position:"relative"}}/>
                 <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png'/>
                 <div>SNS 로그인</div>
                <div id="login-error-msg-holder">
                    <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
                </div>

                {/* 회원가입 폼 */}
                <form id="login-form" onSubmit={ handleFormSubmit}>
                    <input type="text" value={inputEmail} onChange={handleUseremailChange} name="useremail" id="useremail-field" className="login-form-field" placeholder="E-mail" />
                        <input type="text" value={inputPw} onChange={handleUserPwChange} name="userpassword" id="password-field" className="login-form-field"  placeholder="Password"/>
                            <button type="submit" id="login-form-submit"/>
                            </form>

                        </div>
                    </div>
                    </div>
                    </div>
                    )
}

                    export default Login02