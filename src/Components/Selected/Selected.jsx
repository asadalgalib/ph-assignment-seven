import PropTypes from 'prop-types'
import Choosen from '../Choosen/Choosen';

const Selected = ({selected,handleDelet,handleAll}) => {
    // const [isTrue, setIstrue] = useState(true);

    // const handleAll = () => {
    //     setIstrue(true)
    // }
    
    return (
        <div className='mt-10 mb-28 max-w-7xl mx-auto'>
            {
                selected.map( (select,index) => <Choosen key={index} handleDelet={handleDelet} select={select}></Choosen> )
            }
            <button onClick={handleAll} className={`border bg-blue-700 hover:bg-blue-200 hover:text-black hover:border-blue-700 text-[#fff] py-2 px-4 mt-8 font-semibold  rounded-lg `}>Add More Player</button>
        </div>
    );
};

Selected.propTypes = {
    selected : PropTypes.array.isRequired,
    handleDelet : PropTypes.func,
    handleAll : PropTypes.func
}

export default Selected;