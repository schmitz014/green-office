import TechCarouselCard from "../components/TechCarouselCard";
import TitleDark from "../components/TitleDark";

export default function Tech() {
    return (
        <>
            <TitleDark title="Tecnologia e Inovação" />
            <div className="flex justify-center items-center flex-col xl:flex-row m-5 gap-10">
                <TechCarouselCard 
                    img="/img/Energies/solar.jpg" 
                    alt="Painel de energia solar em um dia ensolarado" 
                    title="Energia Solar" 
                    benefits="Energia renovável, sustentável e econômica." 
                />
                <TechCarouselCard 
                    img="/img/Energies/wind.jpg" 
                    alt="Turbina eólica em um campo" 
                    title="Energia Eólica" 
                    benefits="Energia limpa e renovável, sem emissão de gases."
                />
                <TechCarouselCard 
                    img="/img/Energies/biomass.jpg" 
                    alt="Biomassa de madeira" 
                    title="Energia de Biomassa" 
                    benefits="Energia renovável, limpa e de baixo custo."
                />
                <TechCarouselCard 
                    img="/img/Energies/hydroeletric.jpg" 
                    alt="Barragem de uma hidrelétrica" 
                    title="Energia Hidrelétrica" 
                    benefits="Energia limpa, renovável e de baixo custo."
                />
                <TechCarouselCard 
                    img="/img/Energies/geothermal.jpg" 
                    alt="Usina geotérmica" 
                    title="Energia Geotérmica" 
                    benefits="Energia limpa, renovável e de baixo custo."
                />
            </div>
        </>
    );
}
