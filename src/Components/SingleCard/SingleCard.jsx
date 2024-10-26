import PropTypes from 'prop-types'
import { MdAccountCircle } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const SingleCard = ({ card, handleSelected }) => {

    const { name,img, country,role,rating,handed_bat,price } = card;
    return (
        <div className="card bg-base-100 border p-4">
            <figure>
                <img className='rounded-md'
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="flex flex-col mt-4">
                <div className='flex items-center justify-start gap-2'><MdAccountCircle className='text-2xl text-blue-400'></MdAccountCircle><h2 className="text-base font-bold">{name}</h2></div>
                <div className='flex items-center justify-between mb-2'>
                    <div className='flex items-center justify-start gap-2 mt-2 text-[#13131398]'><FaFlag className='text-blue-400'></FaFlag>{country}</div>
                    <p className='border py-1 px-6 rounded-lg bg-slate-100 font-medium'>{role}</p>
                </div>
                <hr />
            </div>
            <div className='flex items-center justify-between font-medium mt-2'>
                <div className='space-y-3'>
                    <p className='flex items-center justify-start gap-2'>Rating : {rating} <FaStar className='text-[#FFD700]'></FaStar> </p>
                    <p>{handed_bat} Handed Bat</p>
                    <p>$ {price}</p>
                </div>
                <div className='space-y-3'>
                    <p className='flex text-[#ffe659]'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalfStroke></FaStarHalfStroke></p>
                    <p className='text-[#13131398]'>{handed_bat} Handed Bat</p>
                    <button onClick={() => handleSelected(card)} className='border-2 hover:border-blue-700 rounded-xl hover:bg-blue-100 font-semibold hover:text-black text-[#fff] bg-blue-400 py-2 px-6 '>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object.isRequired,
    handleSelected : PropTypes.func.isRequired
}

export default SingleCard;