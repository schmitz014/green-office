import { BsEmojiDizzyFill } from "react-icons/bs";

export default function PageNotFound() {
    return (
        <div className="text-center font-poppins m-10">
            <div>
                <div className="flex items-center justify-center gap-5 text-dark-green text-9xl">
                    <BsEmojiDizzyFill />
                    <h1 className="font-bold">404</h1>
                </div>
                <h2 className="text-3xl font-semibold text-dark-green mt-10">Página não encontrada!</h2>
            </div>
        </div>
    );
}