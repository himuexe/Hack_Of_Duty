import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "When are the hackathon dates?",
    answer: "Our hackathon is scheduled for October 28-29, 2024. Mark your calendars!"
  },
  {
    question: "What is the duration of the hackathon?",
    answer: "The hackathon will run for 24 hours, starting at 12 PM on Monday and ending at 12 PM on Tuesday."
  },
  {
    question: "What tracks are available for participants?",
    answer: "We have four exciting tracks: Healthcare, EdTech, Natural Language Processing, and Open CV. Choose the one that interests you most!"
  },
  {
    question: "Who can participate in the hackathon?",
    answer: "Our hackathon is open to students of all skill levels enrolled in any college. Whether you're a beginner or an expert, you're welcome to join!"
  },
  {
    question: "Is there a registration fee?",
    answer: "No, participation in our hackathon is completely free of charge."
  },
  {
    question: "Will there be prizes for the winners?",
    answer: "Yes! We have exciting prizes for the top teams in each track, including cash rewards, grants and goodies."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-500 py-4 button-cursor">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-white font-semibold text-sm sm:text-base">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-orange-500 flex-shrink-0 ml-2" size={20} />
        ) : (
          <ChevronDown className="text-orange-500 flex-shrink-0 ml-2" size={20} />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-orange-200 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQs = () => {
  return (
    <div className="bg-black min-h-screen p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-6 sm:mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;