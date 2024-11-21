export default function TechCarouselCard({ img, alt, title, benefits }) {
    return (
        <div className="bg-gray-200 drop-shadow-lg w-60 rounded-md font-poppins text-color-white flex flex-col justify-between p-3 hover:scale-110 transition-all">
            <img src={img} alt={alt} className="w-full h-32 object-cover rounded-t-md" />
            
            <div className="bg-dark-green text-center text-lg p-2 rounded-b-md">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm">
                    {benefits}
                </p>
            </div>
        </div>
    );
}
