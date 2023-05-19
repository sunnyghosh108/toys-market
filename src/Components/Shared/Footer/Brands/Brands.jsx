import React from 'react';

const Brands = () => {
    return (
        <div className='m-4'>
            <div className='flex gap-10   bg-emerald-950 w-full'>
                <div> <img  src='https://junotoys.themerex.net/wp-content/uploads/2021/09/cl5-copyright.png'/> </div>
                <div> <img  src='https://junotoys.themerex.net/wp-content/uploads/2021/09/cl4-copyright.png'/> </div>
                <div> <img  src='https://junotoys.themerex.net/wp-content/uploads/2021/09/cl3-copyright.png'/> </div>
                <div> <img  src='https://junotoys.themerex.net/wp-content/uploads/2021/09/cl2-copyright.png'/> </div>
                <div className='mx-10'>
                    <p> <span className='text-black text-6xl'> WE WORK WITH </span><br/><span className='text-black text-6xl m-14'>THE BEST </span><br/> <span className='text-black text-6xl m-32'>BRANDS</span></p>
                </div>

            </div>
        </div>
    );
};

export default Brands;