import React from 'react';

const Gallery = () => {
    return (
         <div>
            <h3 className='text-center text-red-400 text-3xl'>JUNO KIDS & TOYS GALLERY</h3>
           <div className='grid grid-cols-3 gap-4 m-5'>
           <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product3-copyright-630x630.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Dolls trailer!</h2>
         <p>Dolls trailer</p>
         <p>Price:$245</p>
       </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product9-copyright-630x630.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Construction toys!</h2>
         <p>Construction toys</p>
         <p>Price:$245</p>
       </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product10-copyright-630x630.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Teddy Bear!</h2>
         <p>Teddy Bear</p>
         <p>Price:$245</p>
       </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product12-copyright.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Emergency Truck!</h2>
         <p>Emergency Truck trailer!</p>
         <p>Price:$245</p>
       </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product5-copyright-630x630.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Genius Tray!!</h2>
         <p>Genius Tray</p>
         <p>Price:$245</p>
       </div>
       </div>
       <div className="card w-96 bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
          <img src="https://junotoys.themerex.net/wp-content/uploads/2021/09/product2-copyright-630x630.jpg" alt="Shoes" className="rounded-xl" />
         </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title">Excavator Toys!</h2>
         <p className='text-black'>Excavator trailer</p>
         <p>Price:$125</p>
       </div>
       </div>
           </div>
         </div>
    );
};

export default Gallery;