import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import WatchLater from './pages/WatchLater';
import Footer from './components/Footer';
import Reviews from './pages/Reviews'
import { useEffect, useState } from 'react';
import BarLoader from "react-spinners/BarLoader";


function App() {
  const [watch,setWatch]=useState('')
  const [loading,setLoading]=useState(false)

useEffect(()=>{
setLoading(true)
setTimeout(() => {
  setLoading(false)
}, 3000);
},[])

const override: CSSProperties = {
 display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width:'100%',
  margin: "0 auto",
  backgroundColor:'black'
 
 
};


  return (
    <div className='animation1'>
    {
        loading?
        <BarLoader
        color={'#ffff'}

        cssOverride={override}

        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />:<div className="App"><Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlater' element={<WatchLater watch={watch}/>}/>
        <Route path='/review/:ide' element={<Reviews setWatch={setWatch}/>}/>
      </Routes>
      <Footer/></div>
      }
    </div>
      
      
    
  );
}

export default App;
