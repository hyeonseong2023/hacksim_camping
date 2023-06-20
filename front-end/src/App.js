
// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';

// import Write from './components/Write';
import Write_Test from './components/Write_Test'
import { useState, useEffect } from 'react';

import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';

import axios from 'axios'

import { Routes , Route } from 'react-router-dom'
import MainList from './components/MainList';



function App() {

  
  // const formData = new FormData();



  // useEffect(()=>{
  // axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
  // .then((res)=>{
  //   console.log('결과',res.data);
  //   })
  // },[])


//   useEffect(()=>{
//   axios.post("http://172.30.1.43:8088/gocamping/comunity/write",
//   // formData,
//   // { 
//   //   headers:{"Content-Type" : "multipart/form-data"}
//   // }
// )
//   .then((res)=>{
//     console.log('결과',res.data);
//     })
//   },[])
// useEffect(() => {
//   const formData = new FormData();
//   formData.append('imageUrl', selectedFile);

//   axios
//     .post('http://172.30.1.43:8088/gocamping/comunity/write', formData)
//     .then((res) => {
//       console.log('결과', res.data);
//     })
//     .catch((error) => {
//       console.error('에러', error);
//     });
// }, []);


  

//   return (


//     <div>
//       <Header />
//       <Routes>
      
//         <Route path='/' element={<Figure /> } />
//         <Route path='/write1' element={<Write />} />
//       </Routes>

//       <Footer />

//     </div>

//   );
// }function App() {
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [comunity, setComunity] = useState([]);


  return (

    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Figure />} />
        {/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} />
        <Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity}/>}/>

      
        {/* <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />
        <Route path="/content" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} />} />
        <Route path="/comunity" element={<SyLoadBoardList /> }/> */}


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
