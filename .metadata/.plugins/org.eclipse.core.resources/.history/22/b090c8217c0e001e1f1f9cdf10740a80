
import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import StoryList from './components/StoryList';
import StoryDetail from './components/StoryDetail';
import Nav from './components/Nav';
// import { BrowserRouter, Route, Routes , Switch } from 'react-router-dom'

function App() {
 
  const[list,setList] = useState([])

  // useEffect(()=>{
  //   //화면이 mount 되었을 때 back-end Data를 가져오겠다. 

  //   axios.get('http://172.30.1.9:8082/gocamping/')
  //   .then((res)=>{
  //     console.log('결과 :',res.data)
  //     setList(res.data)
  //   })
  // },[])




  return (

    <div className='App'>
      <Nav/>
           <Routes>
                  <Route path="/" element={<StoryList list={list}/>}></Route>
                  <Route path="/detail" element={<StoryDetail/>}></Route>
                  <Route path="/list" element={<StoryList/>}></Route>
            </Routes>
      <Figure />
      <Footer />

    </div>

  );
}

export default App;
