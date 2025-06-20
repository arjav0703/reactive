import Button from "./Button";

export default function Workshop() {
    return(
         <section className="w-full max-w-3xl space-y-8">
                <header className="text-center">
                  <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#61DBFB] to-[#7FDBFF]">
                    Club Leader?
                  </h2>
                  <p className="mt-2 text-lg text-gray-300">
                    Run a workshop at your high school!
                  </p>
                </header>
        
                <div className="bg-[#112240] border-dotted border-[#61DBFB] border-5 rounded-lg shadow-lg p-8 space-y-3">
                  <p className="text-lg">You will need to make an individual submission in order to show that you are capable of running a workshop. Once your submission is approved, submit the workshop form. Feel free to contact @Arjav or @Jps on slack if you have any questions regarding your workshop.</p>
                  <div className="flex justify-end gap-3">
                    <Button href="https://forms.hackclub.com/t/pjgV9xJvvvus">Workshop Form</Button>
                  </div>
                </div>
              </section>
    )
}
