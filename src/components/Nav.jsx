const Nav = () => {
    return (
        <div className='flex w-full justify-between py-5 max-w-[1200px]'>
            <div>Logo</div>
            <div className='flex justify-around w-full max-w-[800px]'>
                <p>Home</p>
                <p>About</p>
                <p>Destination</p>
                <p>Blog</p>
                <p>Tour</p>
            </div>
            <div></div>
        </div>
    );
};

export default Nav;
