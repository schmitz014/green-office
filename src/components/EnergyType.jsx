import { NavLink } from "react-router-dom";

export default function EnergyType({ img, alt, subtitle, link }) {
    return (
        <>
            <div className="bg-dark-green w-60 h-60 gap-y-3 rounded-lg font-poppins m-3 flex flex-col justify-center items-center hover:scale-105 transition-all">
                <div className="bg-light-green w-52 h-44 rounded-lg flex flex-col justify-between items-center drop-shadow-md">
                    <h2 className="text-color-white italic font-bold text-xl my-1">{subtitle}</h2>
                    <img className="w-full h-40 rounded-lg" src={img} alt={alt}/>
                </div>
                <div className="">
                    <h1 className="font-bold italic text-center text-2xl text-color-white hover:scale-105 transition-all">
                        <NavLink to={link}>Saber mais</NavLink>
                    </h1>
                </div>
            </div>
        </>
    )
}