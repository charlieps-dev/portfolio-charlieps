import SocialNetwork from "@/app/components/SocialNetwork/SocialNetwork";
import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';

export default function Home() {
    const image: string = 'https://charliepsportfolio.blob.core.windows.net/assets/_4d274f88-c1bd-41b9-b3a5-e5c10fa72bb7.jpeg'
    noStore();
    const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
      <>
          <main className="flex min-h-screen flex-col items-center justify-center">
              <div className="flex flex-row justify-around w-3/4 p-2">
                  <div className="flex flex-col items-start justify-start w-1/3 bg-slate-800 border-gray-700 border-4 rounded-2xl p-5">
                      <p className="text-3xl text-blue-400">Carlos Pintor</p>
                      <p className="text-left">Developer FullStack</p>
                      <div className="border-gray-400 border-b w-3/4 my-2"/>
                      <div className="flex flex-col mt-7 mx-4 gap-8 text-blue-200">
                          <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Resume</p>
                          <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Experience</p>
                          <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Devtools</p>
                          <p className="cursor-pointer transition-all hover:text-cyan-400 hover:mx-4">Projects</p>
                      </div>
                      <SocialNetwork />
                  </div>
                  <Image width={300} height={300} className="w-1/2 object-contain" src={image} alt='Carlos Pintor'/>
              </div>
          </main>
      </>

  );
}
