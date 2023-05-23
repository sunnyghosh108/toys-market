import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingRow = ({booking,handleDelete,handleBookingConfirm,handleSearch}) => {
    const {_id,seller,details,price,photo,status,category,ratings}=booking;
    

    const [control,setControl]=useState(false);

    const handleBookingUpdate =id =>{
      fetch(`https://toys-marketplace-server-one.vercel.app/products/${id}`,
      {
        method:"PUT",
        headers:{"Content-type": "application/json"},
        body:JSON.stringify(id),
      })
      .then((res)=>res.json())
      .then((result)=>{
        if(result.modifiedCount > 0){
          setControl(!control);
        }
        console.log(result);

      });
    };
    


    return (
     
        <tr>
        <th>
       {
            status === 'confirm'?<span className="font-bold text-primary">Confirmed</span>:
            <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
       }
        </th>
             <td>
                <div className="avatar">
                <div className=" rounded w-24 h-24">
               {
                photo &&  <img src={photo} alt="Avatar Tailwind CSS Component" />
               }
               </div>
               </div>
               </td>
            <td>  {category}</td>
            <td> {seller }</td>
            <td>${price}</td>
            <td> {ratings }</td>
        <th>
       <div className=''>
       <button onClick={()=>handleDelete(_id)} className="btn btn-active btn-primary">Delete</button>
       
       {/* <button onClick={()=>handleBookingUpdate(_id)} className="btn btn-active btn-success ">Update</button> */}

       <Link to={`updateToys/${_id}`}><button className="btn btn-active btn-success ">Update</button> </Link>
       </div>
        </th>
      </tr>
     
    );
};

export default BookingRow;