import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] relative"
        style={{
          fontFamily: "var(--font-sans), Arial, Helvetica, sans-serif",
        }}
      >
        <Hero />
        <p className="absolute bottom-6 text-xl text-[#61DBFB]">Reactive is a program by <a href="https://haclclub.com" className="hover:underline">Hackclub</a>. Ends 2nd July.</p>
      </main>

      <Details/>
      <Footer/>
    </>
  );
}
