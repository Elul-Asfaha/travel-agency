const Nav = () => {
    return (
        <div className='flex w-full justify-between py-5 max-w-[1200px]'>
            <div>Logo</div>
            <div className='flex justify-around items-center w-full max-w-[800px]'>
                <p>Home</p>
                <p>About</p>
                <p>Destination</p>
                <p>Blog</p>
                <p>Tour</p>
            </div>
            <button className='text-white bg-black py-2 px-4 rounded-sm'>
                Book Now
            </button>
        </div>
    );
};

export default Nav;
