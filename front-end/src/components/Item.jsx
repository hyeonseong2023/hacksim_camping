import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({item}) => {
  const nav = useNavigate();
  const getDetail = () =>{
    // nav(`/ProductDetail/${idx}`)
  }

  

  return (
    <div onClick={getDetail}>
      <img width="100px" src={item.story_img}></img>
      <p>제목 : {item.story_title}</p>
      
    </div>
  )
}

export default Item