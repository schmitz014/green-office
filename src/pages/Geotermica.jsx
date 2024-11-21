import Title from "../components/Title";

export default function Geotermica() {
    return(
        <>
            <Title title="Energia Geotérmica" />
            <div className="font-poppins font-semibold m-10 flex flex-col xl:flex-row gap-5 xl:text-4xl xl:text-right">
                <img src="/public/img/Energies/geothermal.jpg" alt="Foto Energia Geotérmica" className="xl:w-2/4 rounded-xl"/>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, voluptate! Ea maxime porro animi voluptas, ullam officia culpa maiores praesentium veniam, placeat itaque ipsum possimus ducimus ipsa dolorem, temporibus modi?
                </p>    
            </div>
        </>
    )
}