

const Banner = () => {
    return (
        <div className="w-full h-[1200px]">
            <div  className="relative w-full">
                <img src='https://static.standard.co.uk/2022/05/31/14/Brio%20builder%20construction%20set%20lifestyle.jpg?width=1200&height=630&fit=crop' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#5c5050] to-[rgba(22, 21, 21, 0)]">
                    <div className='text-white text-center mx-16 '>
                        <h2 className='text-6xl font-bold'>GET A BONUS WITH YOUR FIRST ORDER!!</h2>
                        <p className="text-4xl text-slate-950"> Here you can choice different types of toys</p>
                        <button className="btn rounded-xl btn-success mt-5">Discover more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;