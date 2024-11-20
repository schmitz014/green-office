export default function TitleDark({ title }) {
    return (
        <div className="text-center font-poppins p-5 bg-olive-green">
            <div>
                <h1 className="text-3xl xl:text-5xl font-bold italic text-color-white">{title}</h1>
            </div>
        </div>
    );
}