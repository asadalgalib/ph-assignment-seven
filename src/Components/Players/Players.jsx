

const Players = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Available Players</h1>
            <div>
                <button className="border font-semibold py-2 px-4  hover:border-blue-700 rounded-xl hover:bg-blue-200 hover:text-black text-[#fff] bg-blue-700 rounded-l-full">Available</button> 
                <button className="border py-2 px-4 hover:border-blue-700 rounded-xl hover:bg-blue-200 font-semibold hover:text-black text-[#fff] bg-blue-700 rounded-r-full">Selected()</button>
            </div>
        </div>
        
    );
};

export default Players;