import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { seereview1, seewatchlater, watchlaterAPI } from '../services/allApi';
import {data } from '../components/DATAS/data'
import View from '../components/View';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropagateLoader from "react-spinners/PropagateLoader";


function Reviews({setWatch}) {
  const {ide}= useParams();
  const [datas,setDatas]=useState([])
  const [del,setDel]=useState(false)

 
const reviews =async()=>{
const mainreview =await seereview1();
const {data} =mainreview
setDatas(data)
console.log(datas);
}

//animtion
const [loading,setLoading]=useState(false)

useEffect(()=>{
setLoading(true)
setTimeout(() => {
  setLoading(false)
}, 1500);
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



useEffect(()=>{
reviews()
setDel(false)
},[del])

const res= data.filter(item => item.id ===parseInt(ide) )[0];
console.log(res);

const watchlater = async()=>{

 await watchlaterAPI(res)
  toast.success('sucessfully uploaded')
  
}


  return (
<>
{
  loading? <PropagateLoader


  color={'#ffff'}

  cssOverride={override}

  loading={loading}
  
  size={10}
  aria-label="Loading Spinner"
  data-testid="loader"
/>:<div className='container'>
  
<img className='mt-4 rounded-3 object-fit-fill' alt='noimage' height={'100%'} width={'100%'} src={res.posterimage}></img>
<div className='d-flex '>
  <h1 className='mt-3'>{res.name}</h1>
<button onClick={watchlater}  className='ms-5 btn'><i  class="fa-solid fa-heart fa-2xl text-danger"></i></button>
</div>


<View del={setDel} tok={res} ds={datas}/>
<ToastContainer position="top-center" />
 </div>
}

</>



 
   
  )
}

export default Reviews