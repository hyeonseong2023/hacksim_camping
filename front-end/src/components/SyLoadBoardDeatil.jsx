import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SyLoadBoardDeatil = () => {

    const {idx} = useParams();

    useEffect(()=>{
        axios.get('http://172.30.1.43:8088/gocamping/comunity/sort')
    },[])

  return (
    <div>SyLoadBoardDeatil</div>
  )
}

export default SyLoadBoardDeatil