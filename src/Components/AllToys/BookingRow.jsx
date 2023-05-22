import React from 'react';
import { Link } from 'react-router-dom';

const BookingRow = ({booking,handleDelete,handleBookingConfirm,handleBookingUpdate}) => {
    const {_id,seller,details,price,photo,status,ratings}=booking;
    
    


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
            <td>  {details}</td>
            <td> {seller }</td>
            <td>${price}</td>
            <td> {ratings }</td>
        <th>
       <div className=''>
       <button onClick={()=>handleDelete(_id)} className="btn btn-active btn-primary">Delete</button>
       
       {/* <button onClick={()=>handleBookingUpdate(_id)} className="btn btn-active btn-success ">Update</button> */}

       <Link to={`updateToys/${_id}`}><button className="btn btn-active btn-success ">Update</button></Link>

       



       </div>
        </th>
      </tr>
    );
};

export default BookingRow;