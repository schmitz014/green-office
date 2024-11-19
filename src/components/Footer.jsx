import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-medium-green text-color-white font-poppins p-5">
                <div className="flex justify-between">
                    <div>
                        <img className="w-10 xl:w-20" src="/public/Logo.svg" alt="Logo da GreenOffice" />
                        <span className="flex flex-col text-sm xl:text-2xl text-wrap text-left xl:font-semibold">
                            Faça parte da comunidade do Green Office e ajude a preservar o meio ambiente.
                        </span>
                    </div>
                    <div className="flex flex-col text-sm xl:text-3xl text-right">
                        <span className="font-thin italic">&quot;Seja a mudança que você deseja ver no mundo.&quot;</span>
                        <span className="font-bold">-Mahatma Gandhi</span>
                    </div>
                </div>
                <span className="block w-full h-1 xl:h-2 bg-color-white my-5"></span>
                <div className="flex justify-between text-sm xl:text-xl">
                    <p className="font-bold">&copy; 2024 Green Office</p>
                    <span className="hover:font-semibold transition-all"><NavLink to="https://www.github.com/schmitz014">Github.com/schmitz014</NavLink></span>
                </div>
            </footer>
        </>
    );
}