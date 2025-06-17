import Button from "./Button";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex md:flex-row flex-col items-center">
        <Logo size={150} />
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
        <Button href="#Details">Know more</Button>
        <Button href="https://github.com/arjav0703/reactive-template">See Template</Button>
        <Button href="https://www.figma.com/slides/Gqg9is3DM3BFmlUB6yTArH/Reactive-Guide?node-id=1-42&t=0ELDHDCDVg1XLXZX-1">Get Started</Button>
      </div>
    </section>
  );
}
