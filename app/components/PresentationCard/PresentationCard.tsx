import React from 'react';
import SocialNetwork from "@/app/components/PresentationCard/SocialNetwork/SocialNetwork";
import Image from "next/image";

const PresentationCard = () => {
    const image: string = 'https://charliepsportfolio.blob.core.windows.net/assets/_4d274f88-c1bd-41b9-b3a5-e5c10fa72bb7.jpeg'

    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div
                className="flex lg:flex-row p-2 w-full lg:justify-center lg:items-center items-end lg:gap-24 gap-8 lg:max-w-screen-lg flex-col-reverse ">
                <div
                    className="flex flex-col items-start justify-start w-full lg:w-1/3 bg-slate-800 border-gray-700 border-4 rounded-2xl p-5 ">
                    <p className="text-3xl text-blue-400">Carlos Pintor</p>
                    <p className="text-left">Developer FullStack</p>
                    <div className="border-gray-400 border-b w-3/4 my-2"/>
                    <div className="flex flex-col mt-7 mx-4 gap-8 text-blue-200">
                        <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Resume</p>
                        <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Experience</p>
                        <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Devtools</p>
                        <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Projects</p>
                    </div>
                    <SocialNetwork/>
                </div>
                <Image priority={true} width={300} height={300}
                       className="lg:w-1/2 flex w-full justify-center object-contain" src={image} alt='Carlos Pinto'/>
            </div>
        </div>
    );
};

export default PresentationCard;