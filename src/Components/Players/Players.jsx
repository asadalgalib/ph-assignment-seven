import { useState } from "react";
import Cards from "../Cards/Cards";
import Selected from "../Selected/Selected";

const Players = () => {

    const [selected, setSelected] = useState([])
    const [isTrue, setIstrue] = useState(true);

    const handleAll = () => {
        setIstrue(true)
    }
    const handleSelect = () => {
        setIstrue(false)
    }
    
    const handleSelected = select => {
        const singleSelected = selected.find((s) => select.id === s.id)
        const newSelected = [...selected, select];


        if (singleSelected) {
            alert('etar kam ses')
            return;
        }
        else if(newSelected.length <= 6) {
            setSelected(newSelected);
        }
        else {
            alert('6 tar kam ghuch');
        }
    }

    const handleDelet = delet => {
        const remainig = selected.filter(s => s.id !== delet.id);
        setSelected(remainig)
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10 flex items-center justify-between">
                <h1 className="text-3xl font-bold">{isTrue? "Available Players" : `Selected Player (${selected.length}/6)` }</h1>
                <div>
                    <button onClick={handleAll} className={`border py-2 px-4  rounded-xl font-semibold  rounded-l-full ${isTrue? 'bg-blue-400 border-[#fff] text-[#fff]' : 'bg-blue-100 border-blue-700 text-black'}`}>Available</button>
                    <button onClick={handleSelect} className={`border py-2 px-4  rounded-xl font-semibold  rounded-r-full ${!isTrue? 'bg-blue-400 border-[#fff] text-[#fff]' : 'bg-blue-100 border-blue-700 text-black'}`}>Selected({selected.length})</button>
                </div>
            </div>
            <div>
                {isTrue ? <Cards handleSelected={handleSelected}></Cards> : <Selected handleAll={handleAll} handleDelet={handleDelet} selected={selected}></Selected>}


            </div>
        </div>

    );
};

export default Players;

