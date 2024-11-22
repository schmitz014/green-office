import TechCard from "../components/TechCard";
import TitleDark from "../components/TitleDark";

export default function Tech() {
    return (
        <>
            <TitleDark title="Tecnologia e Inovação" />
            <div className="flex justify-center items-center flex-col xl:flex-row m-5 gap-10">
                <TechCard 
                    img="/img/Energies/solar.jpg" 
                    alt="Painel de energia solar em um dia ensolarado" 
                    title="Energia Solar" 
                    benefits="Renovável, sustentável, reduz a conta de luz." 
                />
                <TechCard 
                    img="/img/Energies/wind.jpg" 
                    alt="Turbina eólica em um campo" 
                    title="Energia Eólica" 
                    benefits="Limpa, abundante, reduz a dependência de combustíveis fósseis."
                />
                <TechCard 
                    img="/img/Energies/biomass.jpg" 
                    alt="Biomassa de madeira" 
                    title="Energia de Biomassa" 
                    benefits="Renovável, aproveitamento de resíduos, reduz emissões de carbono."
                />
                <TechCard 
                    img="/img/Energies/hydroeletric.jpg" 
                    alt="Barragem de uma hidrelétrica" 
                    title="Energia Hidrelétrica" 
                    benefits="Confiável, eficiente, armazenamento de água."
                />
                <TechCard 
                    img="/img/Energies/geothermal.jpg" 
                    alt="Usina geotérmica" 
                    title="Energia Geotérmica" 
                    benefits="Estável, baixa emissão de gases, independente das condições climáticas."
                />
            </div>
        </>
    );
}
