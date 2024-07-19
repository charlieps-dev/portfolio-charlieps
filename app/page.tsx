import { unstable_noStore as noStore } from 'next/cache';
import PresentationCard from "@/app/components/PresentationCard/PresentationCard";

export default function Home() {
    noStore();
  return (
      <>
          <main>
              <PresentationCard />
          </main>
      </>

  );
}
