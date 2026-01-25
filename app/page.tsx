import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Section2 />
    </main>
  );
}
