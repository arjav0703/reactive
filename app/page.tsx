export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] relative"
      style={{
        fontFamily: "var(--font-sans), Arial, Helvetica, sans-serif",
      }}
    >
      <section className="flex flex-col items-center">
        <h1
          className="text-[5rem] md:text-[7rem] font-extrabold tracking-tight text-[#61DBFB]"
          style={{
            letterSpacing: "-0.03em",
          }}
        >
          Reactive
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-[#b0c9d9] font-light max-w-2xl text-center">
          Build modern, reactive web apps with style and speed.
        </p>
        <a
          href="#"
          className="mt-10 px-8 py-3 rounded-full bg-transparent text-[#61DBFB] font-semibold text-lg border-2 border-[#61DBFB] hover:bg-[#61DBFB] hover:text-[#0a192f] transition-all duration-200 shadow-none hover:shadow-lg hover:scale-105"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}
