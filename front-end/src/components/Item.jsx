import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({item, idx}) => {
  const nav = useNavigate();
  const getDetail = () =>{
  
    // nav(`/ProductDetail/${idx}`)
  }

  
  // console.log('image path:', item.story_img.split(',')[0]);

  return (
    <div onClick={getDetail}>
      {/* {item.story_img && <img src={"http://localhost:8088/gocamping/static/img/" + item.story_img.split(',')[0]} width="100px" />} */}
      <img width="100px" src={`http://172.30.1.43:8088/gocamping/${item.story_img}`}></img>
      {/* <img src={"http://localhost:8088/" + item.story_img.split(',')[0]} width="100px" /> */}
      <p>제목 : {item.story_title}</p>
      
    </div>
  )
}

export default Item