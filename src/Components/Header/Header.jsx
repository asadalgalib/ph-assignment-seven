import Logo from '../../assets/logo.png'
import hero from '../../assets/banner-main.png'
import { ImCoinDollar } from "react-icons/im";

const Header = () => {
    return (
        <div className="" >
            <div className='sticky top-0 backdrop-blur bg-white bg-opacity-50 px-36'>
                <div className="navbar bg-transparent ">
                    <div className="flex-1">
                        <img className="w-15 h-15" src={Logo} alt="" />
                    </div>
                    <div className="flex-none">
                        <div>
                            <ul className="p-2 mx-4 gap-4 menu menu-horizontal font-semibold">
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>
                        <div className='border-2 bg-blue-400 rounded-xl py-3 px-5 text-[#fff]'>
                            <p className='text-lg font-bold flex items-center justify-center gap-2'><span>0</span> Coin <span className='text-2xl'><ImCoinDollar></ImCoinDollar></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center rounded-2xl bg-[#1e1e1e] bg-hero-pattern bg-blend-hard-light bg-no-repeat bg-cover bg-center">
                <img className='mt-16' src={hero} alt="" />
                <h1 className='text-4xl font-bold text-white mt-6'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-2xl text-[#FFFFFFB3] mt-5'>Beyond Boundaries Beyond Limits</p>
                <div className='border-2 border-blue-700 rounded-2xl p-1 mt-5 mb-16'>
                    <button className='btn hover:border-blue-700 rounded-xl bg-gradient-to-r from-blue-500 to-pink-500 hover:text-black text-[#fff]  font-bold border-none'>Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};

export default Header;