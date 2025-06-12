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
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-300">
          Answers to common questions about this project setup.
        </p>
      </header>

      <div className="space-y-4">
        <FaqItem question="How do I install dependencies?">
          <p>Run <code className="bg-gray-800 px-1 py-0.5 rounded">npm install</code> or <code className="bg-gray-800 px-1 py-0.5 rounded">yarn</code> in your project root.</p>
        </FaqItem>

        <FaqItem question="Where do I add new components?">
          <p>Create a new file under <code className="bg-gray-800 px-1 py-0.5 rounded">src/components/</code>, then import and use it in your pages or other components.</p>
        </FaqItem>

        <FaqItem question="How can I fetch data from an API?">
          <p>
            Use <code className="bg-gray-800 px-1 py-0.5 rounded">fetch</code> or libraries like <code className="bg-gray-800 px-1 py-0.5 rounded">axios</code> inside a
            <code className="bg-gray-800 px-1 py-0.5 rounded">useEffect</code> hook to pull data and store it in state.
          </p>
        </FaqItem>

        <FaqItem question="How do I deploy this demo?">
          <p>
            You can build your app with <code className="bg-gray-800 px-1 py-0.5 rounded">npm run build</code> and then host
            the output on Netlify, Vercel, GitHub Pages, or any static-file host.
          </p>
        </FaqItem>
      </div>
    </section>
  );
}
