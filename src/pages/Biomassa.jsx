import BackButton from "../components/BackButton";
import Title from "../components/Title";

export default function Biomassa() {
    return(
        <>
            <Title title="Energia de Biomassa" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/img/Energies/biomass.jpg" alt="Foto Energia de Biomassa" className="xl:w-2/4 rounded-xl"/>
                <p>
                    A biomassa é uma fonte renovável derivada de materiais orgânicos, como madeira, resíduos agrícolas, resíduos alimentares e até lixo. Ela pode ser convertida em energia de forma sustentável.
                </p>    
            </div>
            <div className="flex justify-center items-center">
                <BackButton />
            </div>
        </>
    )
}