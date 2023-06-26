import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item';
import Notice from './Notice';

const MainList = ({ comunity, setComunity }) => {

  // const [comunity, setComunity] = useState([]);


    useEffect(() => {
        axios
          .get(`http://172.30.1.43:8088/gocamping/comunity`) 
          // .get(`http://172.30.1.9:8088/gocamping/comunity`)
          .then((res) => {
            console.log('API Response:', res.data);
            setComunity(res.data);

            console.log(typeof comunity);

          })
          .catch((error) => {
            console.log('API Error:', error);
          });
      }, []);


      
      
      console.log('comunity:', comunity);
      
  return (
    <div>
      <Notice/>
    <div id='columns'>
      {comunity.length > 0 && comunity.map((item) => {
            console.log('asdf', item.comunity.story_img);
            return <Item  key={item.comunity.story_idx} item={item.comunity} idx={item.comunity.story_idx}/>
   
        })}
        {}


    </div>
    </div>
  )
}

export default MainList