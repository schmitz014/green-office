import DonutChart from "../components/DonutChart";
import TitleDark from "../components/TitleDark";

export default function Need() {

    return (
        <>
            <div className="text-xl xl:text-2xl font-poppins font-medium">
                <TitleDark title="Necessidade" />
                <div className="p-10 xl:p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste error cum voluptate, ducimus illo voluptas, obcaecati inventore eos veritatis atque fuga cumque maiores doloremque repudiandae?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti suscipit iusto sed ipsa voluptatem. Voluptatum!</p>
                </div>
                <DonutChart />
            </div>
        </>
    );
}