import React from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';

const SyLoadBoardItem = ({srcImg, s_title,s_idx,user_email,s_like, s_view, imgWidth, imgHeight, item, idx}) => {

  const nav = useNavigate();

  const handleClick = () => {
    nav(`/comunity/ContentDetail/${s_idx}`)
 }
  
// useEffect(()=>{
//       axios.get("http://localhost:8088/gocamping/api/getTags/{story_idx}")
//    }, [])







  return (

    <div onClick={handleClick} style={{display:"inline-block", position:"relative",border:"1px solid black", width:"30%", margin:"0 3% 3% 0px"}}>
      <img width={"100%"}  src={srcImg} alt="" style={{width: imgWidth, height: imgHeight, objectFit:"cover"}}/>
      <p>제목 : {s_title}</p>
      <p>작성자 : {user_email}</p>
      <p style={{marginBottom:"24px"}}>idx : {s_idx}  {s_like != undefined && ("좋아요 : "+`${s_like}`)} {s_view != undefined && ("조회수 : "+`${s_view}`)} </p>
    </div>    

  )
}

export default SyLoadBoardItem