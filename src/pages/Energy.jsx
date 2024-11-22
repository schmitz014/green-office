import EnergyType from "../components/EnergyType";
import ReductionButton from "../components/ReductionButton";
import Title from "../components/Title";

export default function Energy() {
    return (
        <>
            <Title title="Energia" />
            <div className="font-poppins font-semibold flex items-center flex-col">
                <p className="text-left text-xl px-16">
                    A transição para fontes renováveis, como solar, eólica e biomassa, é crucial para a redução de emissões de gases de efeito estufa e a independência energética. Empresas que adotam modelos sustentáveis geram impactos positivos, promovendo crescimento econômico e criação de empregos.
                </p>
                <div className="flex flex-col xl:flex-row justify-center items-center m-5">
                    <EnergyType img={"/img/Energies/solar.jpg"} alt={"Foto Energia Solar"} subtitle={"Solar"} link={"solar"}/>
                    <EnergyType img={"/img/Energies/wind.jpg"} alt={"Foto Energia Eólica"} subtitle={"Eólica"} link={"eolica"}/>
                    <EnergyType img={"/img/Energies/biomass.jpg"} alt={"Foto Energia Biomassa"} subtitle={"Biomassa"} link={"biomassa"}/>
                    <EnergyType img={"/img/Energies/geothermal.jpg"} alt={"Foto Energia Geotérmica"} subtitle={"Geotérmica"} link={"geotermica"}/>
                    <EnergyType img={"/img/Energies/hydroeletric.jpg"} alt={"Foto Energia Hidrelétrica"} subtitle={"Hidrelétrica"} link={"hidreletrica"}/>
                </div>

                <ReductionButton />
            </div>
        </>
    )
}