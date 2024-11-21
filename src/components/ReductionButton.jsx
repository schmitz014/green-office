import { BsFillInfoCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function ReductionButton() { 
    return( 
        <>
            <button className="bg-light-green hover:bg-soft-green p-2 text-color-white rounded-xl hover:scale-105 transition-all">
                <NavLink to="/" className="flex items-center justify-between gap-2">
                    <span>Principais desafios da redução</span>
                    <BsFillInfoCircleFill />
                </NavLink>
            </button>
        </>
    );
}