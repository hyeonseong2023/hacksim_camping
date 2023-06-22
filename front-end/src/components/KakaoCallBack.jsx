import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const KakaoCallBack = ({} ) => {


    const nav = useNavigate();
    useEffect(() => {

        const params = new URL(document.location.toString()).searchParams;
        const code =params.get("code");
        const grant_type = "authorization_code";

        // const client_id =  process.env.REACT_APP_REST_API_KEY;

        const client_id = "c7cdf149cf26d90f317204cd9e5a046f";

        const REDIRECT_URI = 'http://localhost:3000/kakaocallback';
      
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
                    const generateRandomString = (num) => {
                        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
                        let result = '';
                        const charactersLength = characters.length;
                        for (let i = 0; i < num; i++) {
                            result += characters.charAt(Math.floor(Math.random() * charactersLength));
                        }
                      
                        return result;
                      }
               
   
       
                const kemail=res.data.kakao_account.email;
                const  knick=res.data.kakao_account.email;
                 const kpw=generateRandomString(10);
                 const ktype='K';
             
      
            const krequestData = {
                user_email: kemail,
                user_pw: kpw,
                user_nick: knick,
                user_type: ktype
            };

            axios.post("/gocamping/join", krequestData)
                .then((res) => {
                    console.log(res);
                    alert(kemail + '님 회원가입을 축하드립니다😉')
                    nav('/');
                })
                .catch(error => {
                    console.error(error); // 오류 발생 시 에러 로그를 출력
                    alert('회원가입 실패😥')
                });
    
          
                });
            } else {

              console.log("토큰 없음");
            }
          })   
     

        }, []);


       
  
    
  return (
    <div></div>
  )
}

export default KakaoCallBack