

const Subscribe = () => {
    return (
        <div className="relative h-52 flex justify-center bg-[#ffffff58]">
            <div className="max-w-7xl mx-auto border rounded-3xl p-4 backdrop-blur-2xl absolute -bottom-48">
                <div className="bg-[#FFF] bg-hero-pattern mix-blend-lighten border rounded-2xl text-center py-20 px-80">
                    <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
                    <p className="text-lg text-[#131313B3] font-medium mt-3">Get the latest updates and news right in your inbox!</p>
                    <input className="border min-w-96 py-3 px-5 rounded-xl mr-2 mt-6" type="email" name="" id="" placeholder="Enter your email" />
                    <button className="btn bg-gradient-to-r from-blue-400 to-pink-300 ml-2 mt-6 border-none">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;