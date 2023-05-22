import React from 'react';
import Swal from 'sweetalert2'

const AddToys = () => {
    const handleAddToys = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const photo = form.photo.value;
        const newToys={name,quantity,seller,category,details,price,photo,ratings,email}
        console.log(newToys);

        // send data to the server
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newToys)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div className=' bg-[#dfb332] p-24'>
            <h3 className='text-4xl text-center font-extrabold mb-5'>Add New Toys</h3>
          <form onSubmit={handleAddToys}>
            {/* form name and quantity row */}
        <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
             <span className="label-text">Toys Name</span>
            </label>
            <label className="input-group">
             <input type="text" name="name" placeholder="Toys Name" className="input input-bordered w-full" />
            </label>
           </div>
           <div className="form-control md:w-1/2 ml-4">
            <label className="label">
             <span className="label-text">Available Toys</span>
            </label>
            <label className="input-group">
             <input type="text" name="quantity" placeholder="Available Toys" className="input input-bordered w-full" />
            </label>
           </div>
          </div>
          {/* Supplier */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
             <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
             <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
            </label>
           </div>
           <div className="form-control md:w-1/2 ml-4">
            <label className="label">
             <span className="label-text">Email</span>
            </label>
            <label className="input-group">
             <input type="text" name="email" placeholder="Email Address" className="input input-bordered w-full" />
            </label>
           </div>
          </div>
          {/*category  */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
             <span className="label-text">Category</span>
            </label>
            <label className="input-group">
             <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
            </label>
           </div>
           <div className="form-control md:w-1/2 ml-4">
            <label className="label">
             <span className="label-text">Details</span>
            </label>
            <label className="input-group">
             <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
            </label>
           </div>
          </div>
          {/* price */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
            <label className="label">
             <span className="label-text">Price</span>
            </label>
            <label className="input-group">
             <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
            </label>
           </div>
           <div className="form-control md:w-1/2 ml-4">
            <label className="label">
             <span className="label-text">Ratings</span>
            </label>
            <label className="input-group">
             <input type="text" name="ratings" placeholder="Ratings" className="input input-bordered w-full" />
            </label>
           </div>
          </div>
          {/* photoUrl */}
         <div className='mb-8'>
         <div className="form-control w-full">
            <label className="label">
             <span className="label-text">PhotoUrl</span>
            </label>
            <label className="input-group">
             <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered w-full" />
            </label>
           </div>
         </div>
         <input type="submit" value="Add Toys" className="btn btn-block"/>
        </form>  
        </div>
    );
};

export default AddToys;