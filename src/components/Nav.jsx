import traveler from "../assets/traveler.png";

const Nav = () => {
    return (
        <div className='flex w-full justify-between items-center py-5 max-w-[1200px]'>
            <div className='flex'>
                <img
                    src={traveler}
                    alt=''
                    className='h-[25px] md:h-[35px] w-[100px] object-container'
                />
            </div>
            <div className='hidden md:flex justify-around items-center w-full max-w-[800px]'>
                <p>Home</p>
                <p>About</p>
                <p>Destination</p>
                <p>Blog</p>
                <p>Tour</p>
            </div>
            <button className='text-white bg-black py-2 px-4 w-full max-w-fit rounded-sm'>
                Book Now
            </button>
        </div>
    );
};

export default Nav;
