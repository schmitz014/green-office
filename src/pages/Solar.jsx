import BackButton from "../components/BackButton";
import Title from "../components/Title";

export default function Solar() {
    return(
        <>
            <Title title="Energia Solar" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/img/Energies/solar.jpg" alt="Foto Energia Solar" className="xl:w-2/4 rounded-xl"/>
                <p>
                    A energia solar é uma fonte renovável que aproveita a luz do sol para gerar eletricidade. É uma solução eficiente e sustentável, que pode ser instalada em residências, empresas e grandes plantas solares.
                </p>    
            </div>
            <div className="flex justify-center items-center">
                <BackButton />
            </div>
        </>
    )
}