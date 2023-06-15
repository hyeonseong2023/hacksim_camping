import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import axios from 'axios'
import { useEffect } from "react";

function App() {
  useEffect(()=>{
  axios.get("http://172.30.1.45:8088/gocamping/comunity/a")
  .then((res)=>{
    console.log('결과',res.data);
    })
  },[])



  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </div>
  );
}

export default App;
