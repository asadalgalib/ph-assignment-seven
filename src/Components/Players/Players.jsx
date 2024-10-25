
const Players = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Available Players</h1>
            <div>
                <button className="border py-2 px-4 border-black rounded-l-full">Available</button> 
                <button className="border py-2 px-4 border-black rounded-r-full">Selected()</button>
            </div>
        </div>
    );
};

export default Players;