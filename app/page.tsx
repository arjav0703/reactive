import Hero from "@/components/Hero";
import Details from "@/components/Details";

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
      </main>

      <Details/>
    </>
  );
}
