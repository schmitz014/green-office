import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

    const [MobileMenu, setMobileMenu] = useState(false);

    const openMobileMenu = () => {
        setMobileMenu((prev) => !prev);
    };

    return (
        <>
            <header className="bg-medium-green text-color-white font-poppins">
                <nav className="flex items-center justify-between mx-5">
                    <div className="flex items-center py-5 gap-5">
                        <img src="/Logo.svg" alt="Logo do Green Office" className="w-10 md:w-20 xl:w-28"/>
                        <h1 className="text-2xl md:text-5xl xl:text-6xl font-bold">GREENOFFICE</h1>
                    </div>
                    <div>
                        {/* Desktop */}
                        <ul className="xl:flex text-2xl hidden xl:gap-5">
                            <li className="hover:italic hover:font-semibold hover:scale-105 transition-all"><NavLink to="/">Home</NavLink></li>
                            <li className="hover:italic hover:font-semibold hover:scale-105 transition-all"><NavLink to="/necessidade">Necessidade</NavLink></li>
                            <li className="hover:italic hover:font-semibold hover:scale-105 transition-all"><NavLink to="/energia">Energia</NavLink></li>
                            <li className="hover:italic hover:font-semibold hover:scale-105 transition-all"><NavLink to="/tecnologia">Tecnologia</NavLink></li>
                            <li className="hover:italic hover:font-semibold hover:scale-105 transition-all"><NavLink to="/colabore">Colabore</NavLink></li>
                        </ul>
        
                        {/* Burger */}
                        <div className="xl:hidden flex items-center">
                            <button className="space-y-1 md:space-y-3" onClick={openMobileMenu}>
                                <span className="block w-6 h-1 md:w-20 md:h-2 bg-color-white"></span>
                                <span className="block w-6 h-1 md:w-20 md:h-2 bg-color-white"></span>
                                <span className="block w-6 h-1 md:w-20 md:h-2 bg-color-white"></span>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Mobile */}
                {MobileMenu && (
                    <div className="flex flex-col items-center bg-medium-green text-color-white gap-y-5 p-5 text-xl md:text-2xl">
                        <NavLink to="/">Home</NavLink>
                        <span className="block w-full h-1 md:h-2 bg-color-white"></span>
                        <NavLink to="/necessidade">Necessidade</NavLink>
                        <span className="block w-full h-1 md:h-2 bg-color-white"></span>
                        <NavLink to="/energia">Energia</NavLink>
                        <span className="block w-full h-1 md:h-2 bg-color-white"></span>
                        <NavLink to="/tecnologia">Tecnologia</NavLink>
                        <span className="block w-full h-1 md:h-2 bg-color-white"></span>
                        <NavLink to="/colabore">Colabore</NavLink>
                    </div>
                )}
            </header>
        </>
    );
}