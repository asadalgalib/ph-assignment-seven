import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import PropTypes from 'prop-types'

const Cards = ({handleSelected}) => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-3 gap-5">
            {
                cards.map((card)=> <SingleCard handleSelected={handleSelected} key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleSelected : PropTypes.func
}

export default Cards;