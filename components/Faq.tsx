"use client"
import { useState } from "react";

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

function FaqItem({ question, children }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="w-full flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span className="text-2xl transform transition-transform duration-200">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      <div
        className={`mt-2 text-gray-300 overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {isOpen && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="FAQ"
      className="w-full max-w-3xl mx-auto space-y-6 bg-[#112240] p-8 rounded-lg shadow-lg"
    >
      <header className="text-center">
        <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#61DBFB] to-[#7FDBFF]">
          FAQs
        </h2>
      </header>

      <div className="space-y-4">
        <FaqItem question="Are there any prerequisites?">
          <p>We expect you to know basics of web development like HTML, CSS, and a tiny bit of JavaScript as well. If you are completely new to web development, I reccomend you to checkout other YSWS like <a href="https://boba.hackclub.com/" target="blank" className="hover:underline">Boba</a>, <a href="https://waffles.hackclub.com/" target="blank" className="hover:underline">Waffles</a> and <a target="blank" className="hover:underline" href="https://swirl.hackclub.com/">Swirl</a></p>
        </FaqItem>

        <FaqItem question="Where do I use the $15 grant?">
          <p>You can use it to buy a domain from websites like Porkbun and Name.com. If you want to buy it from somewhere else, let us know!</p>
        </FaqItem>

        <FaqItem question="Do I need to use hackatime to track my time?">
          <p>Yes, you need to track your time with hackatime so that we can ensure there is no fraud involved. You MUST log about 3 hours with hackatime</p>
        </FaqItem>


        <FaqItem question="How do I deploy my project?">
          <p>
            We recommend you to use something like Vercel or Netlify that directly integrate with NextJS
          </p>
        </FaqItem>

        <FaqItem question="When does this end?">
          <p>
            Reactive ends on 2nd July. (this might be extended later)
          </p>
        </FaqItem>

        <FaqItem question="More questions?">
          <p>
            Feel free to reach out to @Arjav on slack or drop a message in <a className="text-[#61DBFB] hover:underline">#reactive</a>
          </p>
        </FaqItem>
      </div>
    </section>
  );
}
