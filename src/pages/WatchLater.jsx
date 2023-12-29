import React, { useEffect, useState } from 'react'
import {data } from '../components/DATAS/data'
import { removewatchlaterAPI, seewatchlater } from '../services/allApi'
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScaleLoader from "react-spinners/ScaleLoader";


function WatchLater({watch}) {
const[store,setStore]=useState([])
 const handlewatchlater = async()=>{
  const result=await seewatchlater()
  setStore(result.data);

 }
 console.log(store);

 const removewatchlater=async(id)=>{
  await removewatchlaterAPI(id)
  toast.info('Removed from watchlater')
 }
 //animation
 const [loading,setLoading]=useState(false)

useEffect(()=>{
setLoading(true)
setTimeout(() => {
  setLoading(false)
}, 1000);
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
  handlewatchlater();
},[removewatchlater])

useEffect(()=>{
handlewatchlater( )

},[])



  return (
    <>
    {
      loading?<ScaleLoader





      color={'#ffff'}
    
      cssOverride={override}
    
      loading={loading}
      
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />: <div>
      <Row className='container-fluid'>
      <h2  className='d-flex justify-content-center mt-2 text-center'>Watchlater list</h2>
      {store.length>0?
      store.map((item)=>(
      <>
        <Col className='d-flex justify-content-center' lg={4} md={6} sm={12}>
              
          <Card className='mt-4 mb-4 rounded' style={{ width: '18rem' }}>
        <Card.Img className='w-100 object-fit-cover' style={{height:'400px' }} variant="top" src={item.imgsrc} />
        <Card.Body className='d-flex justify-content-between'>
          <Card.Title className='d-flex align-items-center w-100 ' ><h3 className='d-flex align-items-center ' >{item.name}</h3></Card.Title>
          <div className='mt-3'>
                  <button onClick={()=>{removewatchlater(item.id)}} className='btn d-flex align-items-center'><i class="fa-solid fa-trash fa-xl"></i></button>    

          </div>
        </Card.Body>
      </Card>
          </Col>
      </>
          
        
        
      ))
     :<p className='text-center'>notthing to display</p>
        
      }</Row>
       <ToastContainer position="top-center" />
    </div>
    }
    </>
    
   
  )
}

export default WatchLater