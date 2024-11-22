import BackButton from "../components/BackButton";
import Title from "../components/Title";

export default function Eolica() {
    return (
        <>
            <Title title="Energia Eólica" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/img/Energies/wind.jpg" alt="Foto Energia Eólica" className="xl:w-2/4 rounded-xl"/>
                <p>
                    A energia eólica utiliza a força do vento para gerar eletricidade. As turbinas eólicas são uma alternativa limpa e eficiente ao uso de combustíveis fósseis, contribuindo para a redução da poluição ambiental.
                </p>    
            </div>
            <div className="flex justify-center items-center">
                <BackButton />
            </div>
        </>
    )
}