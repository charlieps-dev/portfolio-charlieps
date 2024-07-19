'use client'
import Image from "next/image";

const SocialNetwork = () => {
    const github: string = 'https://charliepsportfolio.blob.core.windows.net/assets/gitHub.svg'
    const linkedin: string = 'https://charliepsportfolio.blob.core.windows.net/assets/linkedIn.svg'

    return (
        <div className="flex flex-row justify-end items-start w-full gap-5 my-10">
            <Image onClick={() => window.open("https://github.com/charlieps-dev",'_blank')} className="cursor-pointer hover:w-10" width={30} height={30} src={github} alt={"github"} />
            <Image onClick={() => window.open("https://www.linkedin.com/in/jose-carlos-p-6b4764173/",'_blank')} className="cursor-pointer hover:w-10" width={30} height={30} src={linkedin} alt={"github"} />
        </div>
    );
};

export default SocialNetwork;