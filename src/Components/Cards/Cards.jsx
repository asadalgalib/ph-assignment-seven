import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import PropTypes from 'prop-types'

const Cards = ({handleChoosePlayer, balance}) => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-3 gap-5">
            {
                cards.map((card)=> <SingleCard balance={balance} handleChoosePlayer={handleChoosePlayer} key={card.id} card={card}></SingleCard>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleChoosePlayer : PropTypes.func,
    balance : PropTypes.number
}

export default Cards;