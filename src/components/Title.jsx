export default function Title({ title }) {
    return (
        <>
            <div className="text-center font-poppins p-5">
                <div>
                    <h1 className="text-3xl xl:text-5xl font-bold italic text-dark-green">{title}</h1>
                </div>
            </div>
        </>
    )
}