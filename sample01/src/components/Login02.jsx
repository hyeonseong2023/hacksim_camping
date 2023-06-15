import React, { useEffect } from 'react'
import '../login2.css';
import axios from 'axios'
const Login02 = ({inputEmail,setInputEmail,inputPw,setInputPw}) => {


  
      const handleUseremailChange = (e)=>{
      setInputEmail(e.target.value);
      console.log(e.target.value);
      }
      const handleUserPwChange = (e)=>{
        setInputPw(e.target.value);
        }

      const handleFormSubmit = (event) => {
        event.preventDefault();
   
        //회원가입 데이터를 서버로 전송
      
        axios.post("/gocamping/join", {inputEmail})
        .then((res) => {
            console.log(res);
            console.log("res.data = ", res.data.inputEmail);
            console.log('userData = ',inputEmail);
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
                    <input type="text" value={inputEmail} onChange={handleUseremailChange} name="useremail" id="useremail-field" class="login-form-field" placeholder="E-mail" />
                        <input type="password" value={inputPw} onChange={handleUserPwChange} name="password" id="password-field" class="login-form-field"  placeholder="Password"/>
                            <button type="submit"  id="login-form-submit"/>
                            </form>

                        </div>
                    </div>
                    </div>
                    </div>
                    )
}

                    export default Login02