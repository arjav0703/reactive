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
        <FaqItem question="Can I use AI?">
          <p>You can use AI as an assistant but make sure that not more than 30% of your code was written by AI and you actually learnt something!</p>
        </FaqItem>

        <FaqItem question="Where do I use the $15 grant?">
          <p>You can use it to buy a domain from websites like Porkbun and Name.com. If you want to buy it from somewhere else, let us know!</p>
        </FaqItem>

        <FaqItem question="How can I fetch data from an API?">
          <p>
            Use <code className="bg-gray-800 px-1 py-0.5 rounded">fetch</code> or libraries like <code className="bg-gray-800 px-1 py-0.5 rounded">axios</code> inside a
            <code className="bg-gray-800 px-1 py-0.5 rounded">useEffect</code> hook to pull data and store it in state.
          </p>
        </FaqItem>

        <FaqItem question="How do I deploy this demo?">
          <p>
            We recommend you to use something like Vercel or Netlify that directly integrate with NextJS
          </p>
        </FaqItem>
      </div>
    </section>
  );
}
