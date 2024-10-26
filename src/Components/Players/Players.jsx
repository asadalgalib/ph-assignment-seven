import { useState } from "react";
import Cards from "../Cards/Cards";
import Selected from "../Selected/Selected";
import PropTypes from 'prop-types'

const Players = ({ handleChoosePlayer, balance,handleDelet,selected }) => {

    
    const [isTrue, setIstrue] = useState(true);

    const handleAll = () => {
        setIstrue(true)
    }
    const handleSelect = () => {
        setIstrue(false)
    }


    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 flex items-center justify-between">
                <h1 className="text-3xl font-bold">{isTrue ? "Available Players" : `Selected Player (${selected.length}/6)`}</h1>
                <div>
                    <button onClick={handleAll} className={`border py-2 px-4  rounded-xl font-semibold  rounded-l-full ${isTrue ? 'bg-blue-400 border-[#fff] text-[#fff]' : 'bg-blue-100 border-blue-700 text-black'}`}>Available</button>
                    <button onClick={handleSelect} className={`border py-2 px-4  rounded-xl font-semibold  rounded-r-full ${!isTrue ? 'bg-blue-400 border-[#fff] text-[#fff]' : 'bg-blue-100 border-blue-700 text-black'}`}>Selected({selected.length})</button>
                </div>
            </div>
            <div>
                {isTrue ? <Cards balance={balance}  handleChoosePlayer={handleChoosePlayer}></Cards> : <Selected handleAll={handleAll} handleDelet={handleDelet} selected={selected}></Selected>}


            </div>
        </div>

    );
};

Players.propTypes = {
    handleChoosePlayer: PropTypes.func,
    balance: PropTypes.number,
    handleDelet: PropTypes.func,
    selected: PropTypes.any
}

export default Players;

