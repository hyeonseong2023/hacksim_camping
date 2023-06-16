
// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write from './components/Write';
import { useEffect } from 'react';
import axios from 'axios'

import { Routes , Route } from 'react-router-dom'



function App() {
  

  useEffect(()=>{
  axios.get("http://172.30.1.43:8088/gocamping/comunity/write",
  // {
  
  // },
  // { 
  //   headers:{"Content-Type" : "multipart/form-data"}
  // }
)
  .then((res)=>{
    console.log('결과',res.data);
    })
  },[])



  

  return (

    <div>
      <Header />
      <Routes>
      
        <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />
      </Routes>

      <Footer />

    </div>

  );
}

export default App;
