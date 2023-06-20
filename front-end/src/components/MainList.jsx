import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item';

const MainList = ({comunity, setComunity}) => {

    // const [comunity, setComunity] = useState([]);

    useEffect(() => {
        axios
          .get(`http://172.30.1.43:8088/gocamping/comunity`)
          .then((res) => {
            console.log('API Response:', res.data);
            setComunity(res.data);
          })
          .catch((error) => {
            console.log('API Error:', error);
          });
      }, []);
      
      console.log('comunity:', comunity);
  return (
    <div>
        {comunity.map((item) => {

            return <Item key={item.comunity.story_img} item={item.comunity} idx={item.comunity.story_idx}/>
        // console.log(comunity.comunity.story_img);    
        // console.log(comunity.story_title);
        // return <Item key={comunity.story_img} item={comunity} />;
        
})}
    </div>
  )
}

export default MainList