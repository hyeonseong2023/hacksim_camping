
// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write from './components/Write';
import { useEffect } from 'react';
import axios from 'axios'

import { Routes , Route } from 'react-router-dom'


function App() {
  

  useEffect(()=>{
  axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
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
