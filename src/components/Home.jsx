import { LuPhoneCall } from "react-icons/lu";
const Home = () => {
    return (
        <div className=' max-w-[1200px]'>
            <div className='grid grid-cols-2 my-[50px] min-h-[400px]'>
                <div className='flex flex-col justify-between py-[25px]'>
                    <p className='text-[#4AAEE0] text-lg font-semibold'>
                        Explore, Experience, Embrace
                    </p>
                    <p className='text-5xl font-semibold text-justify'>
                        Unlocking the magic of travel where dreams take flight
                    </p>
                    <p>
                        Welcome to a world of boundless adventures! We invite
                        you to set foth on a journey that transcends the
                        ordinary and dredefines exploration, Immerse yourself in
                        the beauty of every corner of the globe.
                    </p>
                    <button className='text-white bg-black rounded-md text-2xl px-5 py-[6px] max-w-[350px] flex items-center justify-center gap-5'>
                        <span>Book an appointment</span>
                        <LuPhoneCall />
                    </button>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-3 py-10'>
                <div className='flex gap-5 pe-5'>
                    <div>a</div>
                    <div className='w-full'>
                        <p className='font-semibold'>5 Million Plus Visitors</p>
                        <p>
                            Compare your journey with other agencies & save up
                            to 50% on your next travel.
                        </p>
                    </div>
                </div>
                <div className='flex gap-5 border-x-4 px-5'>
                    <div>c</div>
                    <div className='w-full'>
                        <p className='font-semibold'>5 Star Reviews</p>
                        <p>
                            70K+ happy clients worldwide (30K + reviews), see
                            now
                        </p>
                    </div>
                </div>
                <div className='flex gap-5 ps-5'>
                    <div>e</div>
                    <div className='w-full'>
                        <p className='font-semibold'>2 Thousand Plus Hiking</p>
                        <p>2000+ hikers, travel beyond boundaries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
