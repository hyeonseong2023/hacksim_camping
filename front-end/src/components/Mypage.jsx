import React, { useEffect } from 'react'
import  '../Mypage.css'
import { useNavigate } from 'react-router-dom'
const Mypage = () => {
const nav = useNavigate();

    useEffect(()=>{
        if (localStorage.getItem('loginSuccess') === null) {
            nav('/login')
          }
    },[])
  return (
    <div id='hj_mypage'>
        <div id='hj_user-container'>
            <div>회원정보 수정</div>
           
            <div>내가 작성한 댓글 목록</div>

        </div>
        <hr/>
        <div id = 'hj_columns'>
  
         <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        <figure>
            <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/167703270657353531.jpg"/>
            <figcaption>감성캠핑</figcaption>
        </figure>
        </div>
    </div>
  )
}

export default Mypage