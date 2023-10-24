import { LuPhoneCall } from "react-icons/lu";
import { PiAirplaneTilt } from "react-icons/pi";
import { FaRegCompass } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { GiPalmTree } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
const Home = () => {
    return (
        <div className='max-w-[1200px]'>
            <div className='grid grid-cols-2 my-[50px] min-h-[400px]'>
                <div className='flex flex-col justify-between py-[25px]'>
                    <p className='text-[#4AAEE0] text-lg font-semibold'>
                        Explore, Experience, Embrace
                    </p>
                    <p className='text-4xl lg:text-5xl font-semibold text-justify'>
                        Unlocking the magic of travel where dreams take flight
                    </p>
                    <p className='text-gray-500'>
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
                <div className='flex pe-5'>
                    <div className='text-4xl px-2'>
                        <PiAirplaneTilt />
                    </div>
                    <div className='w-full gap-10'>
                        <p className='font-bold text-xl mb-5 pt-1'>
                            5 Million Plus Visitors
                        </p>
                        <p className='text-gray-500'>
                            Compare your journey with other agencies & save up
                            to 50% on your next travel.
                        </p>
                    </div>
                </div>
                <div className='flex border-x-4 px-5'>
                    <div className='text-4xl px-2'>
                        <FiStar />
                    </div>
                    <div className='w-full gap-10'>
                        <p className='font-bold text-xl mb-5 pt-1'>
                            5 Star Reviews
                        </p>
                        <p className='text-gray-500'>
                            70K+ happy clients worldwide (30K + reviews), see
                            now
                        </p>
                    </div>
                </div>
                <div className='flex ps-5'>
                    <div className='text-4xl px-2'>
                        <FaRegCompass />
                    </div>
                    <div className='w-full gap-10'>
                        <p className='font-bold text-xl mb-5 pt-1'>
                            2 Thousand Plus Hiking
                        </p>
                        <p className='text-gray-500'>
                            2000+ hikers, travel beyond boundaries
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full flex my-3 justify-center items-center text-[#4AAEE0] text-xl font-semibold gap-2'>
                <TbWorldSearch />
                <p className='text-lg'>Your Passport to Adventure</p>
            </div>
            <p className='text-4xl font-semibold text-center'>
                Top values for you
            </p>
            <div className='w-full grid grid-cols-3 gap-5 mt-10'>
                <div className='flex flex-col gap-5 max-w-[300px]'>
                    <p className='text-2xl font-semibold'>Enjoy your trip</p>
                    <div className='text-gray-500'>
                        <p>
                            Embar on a journey beyond borders and discover the
                            world{"'"}s wonders.
                        </p>
                        <div className='ps-3 mt-4'>
                            <ui>
                                <li>
                                    Personalized dexpeditions designed to match
                                    your dreams
                                </li>
                                <li>
                                    Immerse yourself in diverse cultures and
                                    traditions
                                </li>
                                <li>Truly enriching adventures</li>
                            </ui>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 max-w-[300px]'>
                    <p className='text-2xl font-semibold'>Epic Adventures</p>
                    <div className='text-gray-500'>
                        <p>
                            Embark on a journey beyond borders and discover the
                            world{"'"}s wonders.
                        </p>
                        <div className='ps-3 mt-4'>
                            <ui>
                                <li>Dive into unspoiled landscapes</li>
                                <li>We curate experiences to suit everyone</li>
                                <li>
                                    Tailor your expedition to match your
                                    aspirations
                                </li>
                            </ui>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 max-w-[300px]'>
                    <p className='text-2xl font-semibold'>Best trip guiding</p>
                    <div className='text-gray-500'>
                        <p>
                            Benefit from seasonal travel guides who bring a
                            wealth of knowledge
                        </p>
                        <div className='ps-3 mt-4'>
                            <ui>
                                <li>
                                    Travel style, preferences, and interests{" "}
                                </li>
                                <li>
                                    Design your own adventure with our flexible
                                    trip
                                </li>
                                <li>Enjoy peace of mind with us</li>
                            </ui>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex my-3 justify-center items-center text-[#4AAEE0] text-xl font-semibold gap-2'>
                <GiPalmTree />
                <p className='text-lg'>Your Journey, Our Experties</p>
            </div>
            <p className='text-4xl font-semibold text-center'>
                Explore the world{" "}
            </p>
            <p className='max-w-[500px] mx-auto my-3 text-center text-gray-500'>
                Embark on a globe-tratting aventure, uncovering the beauty,
                cultures, and wonders that our planet holds
            </p>
        </div>
    );
};

export default Home;
