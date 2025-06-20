import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] relative md:p-0 p-10"
        style={{
          fontFamily: "var(--font-sans), Arial, Helvetica, sans-serif",
        }}
      >
        <Hero />
        <p className="absolute bottom-6 text-xl text-[#61DBFB] text-center">Reactive is a program by <a href="https://hackclub.com" className="hover:underline">Hack Club</a>. Ends July 4.</p>
      </main>

      <Details/>
      <Footer/>
    </>
  );
}
