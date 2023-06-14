import React from 'react'

const Item = ({imgSrc}) => {
  return (
    <div className='item'>
      <img width="100%" src={imgSrc}></img>
      <p>제목</p>
      <p>설명</p>
    </div>
  )
}

export default Item