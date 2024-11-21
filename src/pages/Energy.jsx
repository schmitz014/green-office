import EnergyType from "../components/EnergyType";
import Title from "../components/Title";

export default function Energy() {
    return (
        <>
            <Title title="Energia" />
            <div className="font-poppins font-semibold">
                <p className="text-center text-xl px-16">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sapiente odit velit blanditiis quibusdam? Ea assumenda nam pariatur dignissimos maiores?
                </p>
                <div className="flex flex-col xl:flex-row justify-center items-center m-5">
                    <EnergyType img={"/img/Energies/solar.jpg"} alt={"Foto Energia Solar"} subtitle={"Solar"} link={"solar"}/>
                    <EnergyType img={"/img/Energies/wind.jpg"} alt={"Foto Energia Eólica"} subtitle={"Eólica"} link={"eolica"}/>
                    <EnergyType img={"/img/Energies/biomass.jpg"} alt={"Foto Energia Biomassa"} subtitle={"Biomassa"} link={"biomassa"}/>
                    <EnergyType img={"/img/Energies/geothermal.jpg"} alt={"Foto Energia Geotérmica"} subtitle={"Geotérmica"} link={"geotermica"}/>
                    <EnergyType img={"/img/Energies/hydroeletric.jpg"} alt={"Foto Energia Hidrelétrica"} subtitle={"Hidrelétrica"} link={""}/>
                </div>
            </div>
        </>
    )
}