import Button from "./Button";
import FAQ from "./Faq";

export default function Details() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0a192f] to-[#112240] text-white gap-30 px-6 py-12" id="Details">
      <Requirements/>
      <FAQ/>
    </div>
  );
}


function Requirements() {
  return(
    <section className="w-full max-w-3xl space-y-8">
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
            <li>Create your first reusable component</li>
            <li>Create a component that accepts <span className="font-medium text-white">children</span></li>
            <li>Create a component that accepts <span className="font-medium text-white">props</span></li>
            <li>
              Fetch and display data from an API{" "}
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61DBFB] hover:text-[#7FDBFF] transition-colors hover:underline"
              >
                (e.g. JSONPlaceholder)
              </a>
            </li>
          </ul>
          <div className="flex justify-end gap-3">
            <Button href="#">Guide</Button>
            <Button href="https://github.com/arjav0703/reactive-demo">Demo</Button>
          </div>
        </div>
      </section>
  )
}