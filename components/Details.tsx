import Button from "./Button";
import FAQ from "./Faq";
import Workshop from "./Workshop";

export default function Details() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#112240] text-white gap-30 px-6 py-12" id="Details">
      <Requirements/>
      <Workshop/>
      <FAQ/>
    </div>
  );
}


function Requirements() {
  return(
    <section className="w-full max-w-3xl space-y-8" id="requirements">
        <header className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#61DBFB] to-[#7FDBFF]">
            What to Make?
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            A quick rundown of the project requirements.
          </p>
        </header>

        <div className="bg-[#112240] border border-[#61DBFB] rounded-lg shadow-lg p-8 space-y-6">
          <p className="text-2xl font-semibold">Requirements:</p>
          <ul className="space-y-3 list-inside list-disc text-gray-200">
            <li>Make at least three pages that link to each other</li>
            <li>Make a nested route</li>
            <li>Use at least 5 components</li>
            <li>One of those components should accept <span className="font-medium text-white">children</span></li>
            <li>One of those components should accept <span className="font-medium text-white">props</span></li>
            <li>Have a nested component</li>
            <li>
              Create a component that fetches and displays data from an API {" "}
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61DBFB] hover:text-[#7FDBFF] transition-colors hover:underline"
              >
                (e.g. JSONPlaceholder)
              </a>
            </li>
            <li>Log 3 hours using <a className="text-[#61DBFB] hover:text-[#7FDBFF] hover:underline" href="https://hackatime.hackclub.com">hackatime</a></li>
            <li>Note: Your submission needs to be meaningful (eg. a portfolio, or a website showcasing your favourite artists) and also use relevant APIs (eg. using a blog post api for a blog page instead of using a lorem ipsum API).</li>
          </ul>
          <div className="flex justify-end gap-3">
            <Button href="https://www.figma.com/slides/Gqg9is3DM3BFmlUB6yTArH/Reactive-Guide?node-id=1-42&t=0ELDHDCDVg1XLXZX-1">Guide</Button>
            <Button href="https://forms.hackclub.com/t/fRtCcb5PZUus">Submit</Button>
          </div>
        </div>
      </section>
  )
}