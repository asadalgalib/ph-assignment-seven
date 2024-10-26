import PropTypes from 'prop-types'
import { RiDeleteBin5Line } from "react-icons/ri";

const Choosen = ({ select,handleDelet }) => {
    const { img,name,handed_bat,price,type } = select
   

    return (
        <div className='max-w-7xl mx-auto mt-5'>
            <div className=''>
                <div className='border-2 border-blue-700 py-4 pl-4 pr-16 flex items-center justify-between rounded-md'>
                    <div className='flex justify-start gap-5'>
                        <img className='w-52 h-full rounded-md' src={img} alt="" />
                        <div className='flex-col flex justify-around'>
                            <h2 className='text-xl font-semibold'>{name}</h2>
                            <p className='font-medium text-[#13131398]'>{handed_bat} Handed Bat</p>
                            <p className='font-medium text-[#13131398]'>{type} Bowler</p>
                            <p className='text-xl font-medium'>$ {price}</p>
                        </div>
                    </div>
                    <div><button onClick={()=> handleDelet(select)}><RiDeleteBin5Line className='text-3xl text-red-600'></RiDeleteBin5Line></button></div>
                </div>
                
            </div>
        </div>
    );
};

Choosen.propTypes = {
    select: PropTypes.object,
    handleDelet : PropTypes.func
}

export default Choosen;