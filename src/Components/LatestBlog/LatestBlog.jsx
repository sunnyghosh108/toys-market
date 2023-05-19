import React from 'react';

const LatestBlog = () => {
    return (
        <div>
            <h3 className='text-center font-bold text-3xl text-slate-950'> OUR BLOGS</h3>
         <p className='text-center text-2xl text-black'>Latest News</p>
         <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src='https://junotoys.themerex.net/wp-content/uploads/2020/04/post2-copyright-1536x1465.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-4xl text-center font-bold'>TODDLERS  MAY,21,2023</h2>
                        
                        <div>
                            <button className="btn btn-success mx-8">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src='https://junotoys.themerex.net/wp-content/uploads/2020/04/post3-copyright-1536x1281.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-4xl text-center font-bold'>TODDLERS  MAY,21,2023</h2>
                        
                        <div>
                            <button className="btn btn-success mx-8">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src='https://junotoys.themerex.net/wp-content/uploads/2021/09/post20-copyright-1536x1024.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-4xl text-center font-bold'>TODDLERS  MAY,21,2023</h2>
                        
                        <div>
                            <button className="btn btn-success mx-8">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src='https://junotoys.themerex.net/wp-content/uploads/2020/04/post1-copyright-1536x1024.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(22, 22, 22, 0)]">
                <div className='text-white space-y-7 pl-12 w-1/2'>
                        <h2 className='text-4xl text-center font-bold ml-10'>TODDLERS  MAY,21,2023</h2>
                        
                        <div>
                            <button className="btn btn-success mx-8">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-2/3 left-0 right-0 top-2/3">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        </div>
    );
};

export default LatestBlog;