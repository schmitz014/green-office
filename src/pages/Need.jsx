import DonutChart from "../components/DonutChart";
import TitleDark from "../components/TitleDark";

export default function Need() {

    return (
        <>
            <div className="text-xl xl:text-2xl font-poppins font-medium">
                <TitleDark title="Necessidade" />
                <div className="p-10 xl:p-5">
                    <p>O projeto Green Office tem como objetivo promover práticas sustentáveis no ambiente de trabalho, incentivando a redução do consumo de recursos naturais e a adoção de hábitos ecologicamente corretos.</p>
                    <p className="mt-5 font-bold">Veja o exemplo de monitoramento abaixo:</p>
                </div>
                <DonutChart />
            </div>
        </>
    );
}