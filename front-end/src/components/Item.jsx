import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({item, idx}) => {
  const nav = useNavigate();
  const getDetail = () =>{
  
    nav(`/ContentDetail/${idx}`);
    
  }

  
  // console.log('image path:', item.story_img.split(',')[0]);

  return (
    <figure onClick={getDetail}>
      <img width="100px" src={`http://172.30.1.43:8088/gocamping/${item.story_img}`}></img>
      <figcaption>제목 : {item.story_title}</figcaption>
    </figure>
  )
}

export default Item