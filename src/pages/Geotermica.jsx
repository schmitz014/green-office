import BackButton from "../components/BackButton";
import Title from "../components/Title";

export default function Geotermica() {
    return (
        <>
            <Title title="Energia Geotérmica" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/img/Energies/geothermal.jpg" alt="Foto Energia Geotérmica" className="xl:w-2/4 rounded-xl" />
                <p>
                    A energia geotérmica é uma forma de energia renovável gerada a partir do calor no interior da Terra. É uma fonte de energia limpa e sustentável, emitindo poucos gases de efeito estufa e fornecendo uma fonte de energia estável e confiável.
                </p>
            </div>
            <div className="flex justify-center items-center">
                <BackButton />
            </div>
        </>
    )
}