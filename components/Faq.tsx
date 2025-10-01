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
//V2VsY29tZSBzbWVsdGVycywgSSdtIHN1cnByaXNlZCB5b3UndmUgZm91bmQgdGhpcy4gWW91J3ZlIHByb2JhYmx5IGZpZ3VyZWQgb3V0IGJ5IG5vdyB0aGF0ICNzbWVsdCBpcyBhIFN2ZWx0ZS9TdmVsdGVraXQgYmFzZWQgWVNXUywgd2l0aCBhIHNsaWdodCB0d2lzdCDigJQgWW91IG11c3QgaW5jbHVkZSBhbiBlYXN0ZXIgZWdnIGluIHlvdXIgc2l0ZS4gQnV0IG5vdywgZm9yIHlvdXIgdGFzay4gWW91IG11c3Qgc2VuZCBhICNyZWFjdGl2ZSBZU1dTIHN1Ym1pc3Npb24ncyBnaXRodWIgcmVwbyBsaW5rIGluIHRoZSAjc21lbHQgY2hhbm5lbC4gRmlyc3QgdG8gZG8gc28gZ2V0J3MgYSBjb2xsZWN0aW9uIG9mIEhRIHN0aWNrZXJzIHNlbnQgb3V0IHRvIHRoZW0uIFdlJ2xsIGJlIGluIHRvdWNoLg==
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
          <p>We expect you to know basics of web development like HTML, CSS, and a tiny bit of JavaScript as well. If you are completely new to web development, I recommend that you check out other YSWSs like <a href="https://boba.hackclub.com/" target="blank" className="hover:underline">Boba</a>, <a href="https://waffles.hackclub.com/" target="blank" className="hover:underline">Waffles</a> and <a target="blank" className="hover:underline" href="https://swirl.hackclub.com/">Swirl</a>.</p>
        </FaqItem>

        <FaqItem question="Where do I use the $15 grant?">
          <p>You can use it to buy a domain from websites like Porkbun and Name.com. If you want to buy it from somewhere else, let us know!</p>
        </FaqItem>

        <FaqItem question="Do I need to use Hackatime to track my time?">
          <p>Yes, you need to track your time with Hackatime so that we can ensure there is no fraud involved. You MUST log about 3 hours with Hackatime.</p>
        </FaqItem>


        <FaqItem question="How do I deploy my project?">
          <p>
            We recommend that you use something like Vercel or Netlify that directly integrate with NextJS.
          </p>
        </FaqItem>

        <FaqItem question="When does this end?">
          <p>
            Reactive ends on 2nd July (this might be extended later).
          </p>
        </FaqItem>

        <FaqItem question="More questions?">
          <p>
            Feel free to reach out to @Arjav on Slack or drop a message in <a href="https://hackclub.slack.com/archives/C090S7Q2HT4" className="text-[#61DBFB] hover:underline">#reactive</a>.
          </p>
        </FaqItem>
      </div>
    </section>
  );
}
