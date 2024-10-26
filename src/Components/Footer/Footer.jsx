import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className="bg-[#06091A] pt-56 ">
            <div className="max-w-7xl mx-auto ">
                <div className='flex flex-col items-center justify-around gap-14'>
                    <div><img className='w-36 h-full' src={footerLogo} alt="" /></div>
                    <div className='grid grid-cols-[1.25fr,1.25fr,1.5fr] gap-28 text-[#FFFFFF99] mb-14'>
                        <div className='space-y-4'>
                            <h1 className='text-lg font-semibold text-white'>Abous Us</h1>
                            <p className='text-base font-light'>We are a passionate team dedicated to providing the best services to our customers.</p>
                        </div>
                        <div >
                            <h1  className='text-lg font-semibold text-white'>Quick Links</h1>
                            <ul className='menu'>
                                <li><a>Home</a></li>
                                <li><a>Fixture</a></li>
                                <li><a>Teams</a></li>
                                <li><a>Schedules</a></li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h1  className='text-lg font-semibold text-white'>Subscribe</h1>
                            <p className='text-base font-light'>Subscribe to our newsletter for the <br /> latest updates.</p>
                            <input className=" min-w-64 py-2 px-5 rounded-l-xl" type="email" name="" id="" placeholder="Enter your email" />
                            <button className="text-black bg-gradient-to-r rounded-r-xl from-blue-400 to-pink-300 border-none py-2 px-6 font-semibold">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="border-[#FFFFFF99]" />
                <div className="py-8"><p className="text-[#FFFFFF99] text-center"><small>@2024 Cricket XI All Rights Reserved.</small></p></div>
            </div>
        </div>
    );
};

export default Footer;