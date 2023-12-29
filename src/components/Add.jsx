import React from 'react';
import { data } from './DATAS/data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row, Toast } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { uploadreview } from '../services/allApi';
import { Await, Link } from 'react-router-dom';
import Reviews from '../pages/Reviews';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //value store hook
  const [value,setValue]=useState({
    caption:'',
    description:'',
    rating:'',
    idmov:''
  })

  console.log(value);

  const handleupload= async()=>{
    const{caption,description,rating,idmov}=value

    if(caption && description && rating && idmov){
      
      const response =await uploadreview({...value})
      console.log(response);
      if(response.status>=200 && response.status<=300){
        toast.success("sucessfully uploaded")
        handleClose()
      }else{
        toast.error("something went wrong")
      }


    }else{
      toast.warning("enter all fields")
    }

  }

  return (
    <>
 <Row>
 {data.map((item)=>(
 
<Col className='d-flex justify-content-center' md={6} lg={4}>

 <Card className='mt-2 mb-3 rounded-2' style={{ width: '18rem' }}>
 <Link to={{ pathname: `/review/${item.id}`,state: { id: item.id } }}>
    <Card.Img  className='object-fit-cover rounded-top-2' variant="top" width={"100%"} height={'400px'} src={item.imgsrc} />

 </Link>
   <Card.Body>
     <Card.Title>{item.name}</Card.Title>
     
     <Button className='rounded-3' onClick={()=>{
      setValue({ ...value, idmov: item.id });
      handleShow()}} variant="primary">Add Review</Button>
   </Card.Body>
 </Card>

 <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <p>enter Caption</p>
        <input onChange={(e)=>setValue({...value,caption:e.target.value})} className='form-control w-100 rounded input mt-4 mb-4'  placeholder='enter Caption'></input>

        <p>enter Description</p>
        <input onChange={(e)=>setValue({...value,description:e.target.value})}  className='form-control w-100 rounded input mt-4 mb-4'  placeholder='enter Descripion'></input>

        <p>enter Rating</p>
        <input  onChange={(e)=>setValue({...value,rating:e.target.value})} className='form-control w-100 rounded input mt-4 mb-4'  placeholder='enter Rating(out of 5)'></input>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleupload} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

</Col>

 
  


 ))}

 </Row>
 <ToastContainer  position="top-center" />
    </>
  );
}

export default Add;