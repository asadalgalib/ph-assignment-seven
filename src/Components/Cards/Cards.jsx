import { useEffect, useState } from "react";
import SingleCard from "./SingleCard/SingleCard";

const Cards = () => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-3 gap-5">
            {
                cards.map((card)=> <SingleCard key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

export default Cards;