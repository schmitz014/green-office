import { BsFillInfoCircleFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <div className="relative h-screen bg-cover bg-center font-poppins" style={{ backgroundImage: "url('/img/Background/background-home.jpg')" }}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-5 text-color-white text-3xl md:text-7xl font-bold">
                <h1>CONFORTO SAUDÁVEL,</h1>                 
                <h1>ENERGIA SUSTENTÁVEL</h1>                 
                <div className="flex gap-2 text-lg xl:text-2xl bg-dark-green hover:scale-105 transition-all items-center p-2 xl:p-3 rounded-md font-light">
                    <span><NavLink to="/necessidade">Saber mais</NavLink></span>
                    <BsFillInfoCircleFill />
                </div>
           </div>
        </div>
    );
}
