import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const KakaoCallBack2 = () => {

    const nav = useNavigate();
    useEffect(() => {

        const params = new URL(document.location.toString()).searchParams;
        const code =params.get("code");
        const grant_type = "authorization_code";
        const client_id = 'c7cdf149cf26d90f317204cd9e5a046f';
        const REDIRECT_URI = 'http://localhost:3000/kakaocallback2';
      
        axios
          .post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {},
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((res) => {
            console.log(res); 

            const { data } = res;
            const { access_token } = data;
            if (access_token) {
              console.log(`Bearer ${access_token}`);
              axios
                .post(
                  "https://kapi.kakao.com/v2/user/me",
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${access_token}`,
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                  }
                )
                .then((res) => {
              
                
                    console.log("데이터 가져오기 성공",res);
               
   
    
                const krequestData = {
                    user_email: res.data.kakao_account.email
                };
 
            axios.post("/gocamping/snslogin", krequestData)
                .then((res) => {

                    if(res.status === 200){
                    console.log(res);
                    const user = res.data;
                    console.log("로그인데이터 : ",res.data);
                    alert("로그인성공😉")
                    nav('/');
                    }
                })
                .catch(error => {
                    console.error(error); // 오류 발생 시 에러 로그를 출력
                    alert('로그인 실패😥')
                });
    
          
                });
            } else {

              console.log("토큰 없음");
            }
          })   
     

        }, []);

  return (
    <div>KakaoCallBack2</div>
  )
}

export default KakaoCallBack2