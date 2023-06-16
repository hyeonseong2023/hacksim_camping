
// import './App.css';
// import Figure from './components/Figure';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { BrowserRouter, Route , Switch } from 'react-router-dom'


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
      <Figure />
      <Footer />

    </div>

  );
}

export default App;
