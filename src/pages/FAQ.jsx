import React, { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "What is included in the transportation service?",
      answer:
        "We include a professional driver, premium beverages, and free Wi-Fi.",
    },
    {
      question: "How can I make a reservation?",
      answer:
        "You can book through our website or by calling +123 456 789.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 text-center">
      <div className="container mx-auto px-4 md:max-w-xl lg:max-w-2xl">
        <h2 className="text-3xl font-bold text-gold mb-8">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="text-center">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-lg font-semibold text-gold"
              >
                {item.question}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300 mt-2"
                >
                  {item.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;