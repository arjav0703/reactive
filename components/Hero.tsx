import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <Logo />
        <h1
          className="text-[5rem] md:text-[7rem] font-extrabold tracking-tight text-[#61DBFB]"
          style={{
            letterSpacing: "-0.03em",
          }}
        >
          Reactive
        </h1>
      </div>
      <p className="mt-6 text-xl md:text-2xl text-[#b0c9d9] font-light max-w-2xl text-center">
        You Ship: A React Website, We Ship: $15 to buy a domain!
      </p>
      <div className="flex flex-row gap-6">
        <Button href="#">Get Started</Button>
        <Button href="#">Learn More</Button>
      </div>
    </section>
  );
}

function Logo() {
  return (
    <div>
      <Image src="logo.svg" alt="Logo" width={100} height={100} />
    </div>
  );
}
