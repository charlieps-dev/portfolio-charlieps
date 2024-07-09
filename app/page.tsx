import Image from "next/image";

export default function Home() {
    const image: string = 'https://placehold.co/600x400'
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-row gap-24 justify-between border rounded-md border-gray-200 w-1/2 p-24
        ">
            <div className="flex flex-col items-start justify-start w-full bg-blend-color-burn">
                <p>Carlos Pintor</p>
                <p>Developer FullStack</p>
                <div className="border-b-gray-400 border-b w-full"/>
                <p>Experience</p>
                <p>Projects</p>

            </div>
            <img width={600} height={400} src={image} alt='Carlos Pintor' />

        </div>
    </main>
  );
}
