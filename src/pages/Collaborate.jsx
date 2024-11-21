import { useState } from 'react';

import { Carousel, IconButton } from '@material-tailwind/react';

import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

import Title from '../components/Title';

export default function Collaborate() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('collaborationData', JSON.stringify({ name, email, phone, message }));

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

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
                <div className="bg-dark-green w-full rounded-sm h-2 xl:my-10"></div>
                <Title title="Como você pode colaborar?" />
                <div className="relative flex justify-center h-[500px] lg:h-[600px] xl:w-[1000px]">
                    <img src="/img/Background/background-plant.jpg" alt="" className='object-cover rounded-xl'/>
                    <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl">
                        <div className="m-5 xl:m-10">
                            <h1 className='text-color-white text-center italic font-thin text-3xl xl:m-10'>Cadastre-se agora!</h1>
                            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                                <div className="space-x-2">
                                    <label htmlFor="name" className=" text-color-white font-bold text-sm xl:text-lg">Nome:</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        className="w-full p-1 rounded-sm mb-5" 
                                    />
                                </div>
                                <div className="space-x-2">
                                    <label htmlFor="email" className=" text-color-white font-bold text-sm xl:text-lg">Email:</label>
                                    <input 
                                        type="text" 
                                        id="email" 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        className="w-full p-1 rounded-sm mb-5" 
                                    />
                                </div>
                                <div className="space-x-2">
                                    <label htmlFor="phone" className=" text-color-white font-bold text-sm xl:text-lg">Telefone:</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)} 
                                        className="w-full p-1 rounded-sm mb-5" 
                                    />
                                </div>
                                <div className="space-x-2">
                                    <label htmlFor="message" className=" text-color-white font-bold text-sm xl:text-lg">Mensagem:</label>
                                    <textarea 
                                        id="message" 
                                        value={message} 
                                        onChange={(e) => setMessage(e.target.value)} 
                                        className="w-full p-1 rounded-sm mb-5"
                                    ></textarea>
                                </div>
                                <button type="submit" className="bg-olive-green hover:bg-soft-green text-light-green transition-all p-2 rounded-sm">Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}