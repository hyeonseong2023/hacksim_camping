
// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write from './components/Write';
import { useState, useEffect } from 'react';
import axios from 'axios'

import { Routes , Route } from 'react-router-dom'



function App() {

  
  // const formData = new FormData();


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


  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Figure />} />
        <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
