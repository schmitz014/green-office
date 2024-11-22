import BackButton from "../components/BackButton";
import Title from "../components/Title";

export default function Hidreletrica() {
    return(
        <>
            <Title title="Energia Hidrelétrica" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/img/Energies/hydroeletric.jpg" alt="Foto Energia Hidroelétrica" className="xl:w-2/4 rounded-xl"/>
                <p>
                    A energia hidrelétrica é gerada a partir da força da água em movimento, geralmente de rios ou reservatórios. Essa energia é convertida em eletricidade por meio de turbinas e geradores. Exemplos de usinas hidrelétricas incluem a Usina de Itaipu no Brasil e a Usina das Três Gargantas na China.
                </p>    
            </div>
            <div className="flex justify-center items-center">
                <BackButton />
            </div>
        </>
    )
}