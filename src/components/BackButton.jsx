import { NavLink } from 'react-router-dom';
import { FaArrowRotateLeft } from "react-icons/fa6";


export default function BackButton() {
    return(
        <>
            <button className="bg-light-green hover:bg-soft-green p-2 text-2xl font-poppins text-color-white rounded-xl hover:scale-105 transition-all">
                <NavLink to="/energia" className="flex items-center justify-between gap-2">
                    <span>Voltar</span>
                    <FaArrowRotateLeft />
                </NavLink>
            </button>
        </>
    )
}