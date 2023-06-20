
// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';
import { useEffect } from 'react';
import axios from 'axios'

import { Routes , Route } from 'react-router-dom'


function App() {
  

  // useEffect(()=>{
  // axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
  // .then((res)=>{
  //   console.log('결과',res.data);
  //   })
  // },[])



  

  return (

    <div>
      <Header />
      <Routes>
      
        <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />
        <Route path="/content" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} />} />
        <Route path="/comunity" element={<SyLoadBoardList /> }/>

      </Routes>

      <Footer />

    </div>

  );
}

export default App;
