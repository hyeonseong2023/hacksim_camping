import React from 'react'


const SyLoadBoardItem = ({srcImg, s_title,s_idx,user_email,s_like, s_view, imgWidth, imgHeight}) => {

  

  return (
    <div style={{display:"inline-block", position:"relative",border:"1px solid black", width:"30%", margin:"0 3% 3% 0px"}}>
      <img width={"100%"}  src={srcImg} alt="" style={{width: imgWidth, height: imgHeight, objectFit:"cover"}}/>
      <p style={{position:"absolute", bottom:"0px", backgroundColor:"gray", width:"100%", marginBottom:"3px"}}>와 정말 맛있어요!</p>
      <p>제목 : {s_title}</p>
      <p>작성자 : {user_email}</p>
      <p style={{marginBottom:"24px"}}>idx : {s_idx}  {s_like != undefined && ("좋아요 : "+`${s_like}`)} {s_view != undefined && ("조회수 : "+`${s_view}`)} </p>
    </div>    
  )
}

export default SyLoadBoardItem