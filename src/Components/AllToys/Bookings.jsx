import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import BookingRow from './BookingRow';
import Swal from 'sweetalert2'
const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
    const navigate =useNavigate();
    

    const url = `http://localhost:5000/products?email=${user?.email}`;
    useEffect(() => {
     fetch(url)
     .then(res =>res.json())
     .then(data => setBookings(data))

    },[url]);
        


    const handleDelete=id=>{
        const proceed=confirm('Are you sure you want to delete?');
        if(proceed){
          fetch(`http://localhost:5000/products/${id}`,{
             method:'DELETE'
          })
          .then(res =>res.json())
          .then(data =>{
            console.log(data);
            if(data.deletedCount > 0) 
            {
                // alert('deleted successfully');
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                })
                const remaining = bookings.filter(booking =>booking._id !==id);
                setBookings(remaining);
            }
          })
        }
    }
    
    const handleBookingConfirm =id =>{
        fetch(`http://localhost:5000/products/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status:'confirm'})
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                //update state
                const remaining =bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking=>booking._id ===id);
                updated.status='confirm'
                const newBookings =[updated,...remaining];
                setBookings(newBookings);
                
            }
        })
    }


    

    return  (
        <div className=''>
            <h2 className="text-3xl text-orange-400 text-center mt-4">Your bookings:{bookings.length}</h2>
            <div className="overflow-x-auto w-full">
       <table className="table w-full">
    
       <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Details</th>
        <th>Seller</th>
        <th>price</th>
        <th>Ratings</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
       
        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></BookingRow>)
         }
      </tbody>
    </table>
   </div>
     </div>
    );
};

export default Bookings;