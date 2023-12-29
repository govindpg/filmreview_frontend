import React, { useEffect } from 'react'
import { deletevideoApi } from '../services/allApi';

function View({ds,tok,del}) {
  console.log(ds);
  console.log(tok);

  const deletevid=async(id)=>{
    const res= deletevideoApi(id)

    console.log(res);
    del(true)

  }
 
  const final=ds.filter(item =>item.idmov === tok.id)
  console.log(final);
  return (
    <>
        {
        final.length>0?(
 final.map((item)=>( 
 <div className='d-flex border border-2 p-2 mt-3 mb-4 rounded justify-content-between '>
 <div className=''>

      <h4>{item.caption}</h4>
      <p>{item.description}</p>
      <h5><i class="fa-solid fa-star" style={{color:'yellow'}}></i>{item.rating}/5</h5>
      </div>
    <div  className='d-flex justify-content-center align-item-center p-5 '><button className='btn' onClick={()=>{deletevid(item.id)}}><i class="fa-solid fa-trash fa-2x"></i></button></div>  
     
    </div>

    ))

        ):<p>nothing to display</p>
       }
    </>

   
  )
}

export default View