import Container from './components/Container';
import Header from './components/Header';
import Write from "./components/Write";
import './App.css';
import {} from "react-dom"
import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  
  // useEffect(()=>{
  //   document.querySelector('.container .item').addEventListener('mouseover', function() {
  //     document.querySelector(".header").style.backgroundColor="white"
  //     document.querySelector(".container").style.backgroundColor="pink"
  //     // document.body.style.backgroundColor = 'pink';
  //   });

  //   document.querySelector('.container .item').addEventListener('mouseout', function() {
  //   // document.body.style.backgroundColor = "white";
  //   document.querySelector(".header").style.backgroundColor="white"
  //   document.querySelector(".container").style.backgroundColor="white"
  // });
  // }, [])  

	

	return (
		<div className="App">
			<p><Link to="/write">글쓰기</Link></p>
			<Header/>
			{/* <div style={{width:"1440px",height:"200px", backgroundColor:"yellow", margin:"0 auto", display:"flex"}}></div> */}
			{/* <div style={{height:"50px"}}> </div> */}

			<Routes>
				<Route path='/' element={<Container/>} />
				<Route path='/write' element={<Write/>} />
			</Routes>

			<div style={{height:"100px"}}> </div>
		</div>
	);
}

export default App;
