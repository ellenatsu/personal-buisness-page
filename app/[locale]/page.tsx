import { Toaster } from 'react-hot-toast';
import Contact from "@/components/layout/Contact";
import Hero from "@/components/layout/Hero";
import Review from "@/components/layout/Review";
import Service from "@/components/layout/Service";
import Introduction from "@/components/layout/Introduction";


export default function Home() {
  return (
    <main>
      <Toaster />
      <Hero />
      <Service />
      <Introduction />
      <Contact />
      <Review />
    </main>
  );
}
