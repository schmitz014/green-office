import { Carousel, IconButton } from '@material-tailwind/react';

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import Title from '../components/Title';

export default function Collaborate() {
    return(
        <>
            <Title title="Colabore" />
            <div className="flex flex-col justify-center items-center m-5 font-poppins gap-5">
                <p className='text-xl font-medium text-center text-wrap px-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam cupiditate reprehenderit enim obcaecati fugit unde rem quia delectus, fuga repudiandae, tempore adipisci iusto? Fugit voluptatibus nobis at repellendus ut!
                </p>
                <Carousel className="rounded-xl" prevArrow={({ handlePrev }) => (
                    <IconButton variant="text" onClick={handlePrev} className="!absolute top-2/4 left-4 -translate-y-2/4">
                        <div className="text-4xl text-light-green">
                            <SlArrowLeft />
                        </div>
                    </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                    <IconButton variant="text" onClick={handleNext} className="!absolute top-2/4 !right-4 -translate-y-2/4">
                        <div className="text-4xl text-light-green">
                            <SlArrowRight />
                        </div>
                    </IconButton>
                )}>
                    <div className="relative">
                        <img src="/img/Carousel/kissing-birds.jpg" alt="Casal de pássaros se beijando" className="h-96 w-full object-cover"/>
                        <div className="absolute inset-0 flex items-center justify-center font-poppins m-20">
                            <p className="text-color-white text-md xl:text-2xl font-bold bg-black bg-opacity-50 p-4 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam ea dolorem architecto maiores dolores reiciendis ad ipsa fuga sint.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/img/Carousel/people-planting.jpg" alt="Pessoas plantando" className="h-96 w-full object-cover"/>
                        <div className="absolute inset-0 flex items-center justify-center font-poppins m-20">
                            <p className="text-color-white text-md xl:text-2xl font-bold bg-black bg-opacity-50 p-4 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam ea dolorem architecto maiores dolores reiciendis ad ipsa fuga sint.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/img/Carousel/recycling.jpg" alt="Pessoas reciclando" className="h-96 w-full object-cover"/>
                        <div className="absolute inset-0 flex items-center justify-center font-poppins m-20">
                            <p className="text-color-white text-md xl:text-2xl font-bold bg-black bg-opacity-50 p-4 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam ea dolorem architecto maiores dolores reiciendis ad ipsa fuga sint.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}