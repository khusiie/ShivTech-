'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  isHighlighted?: boolean;
}

interface ExpandedItems {
  [key: number]: boolean;
}

const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<ExpandedItems>({});

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What's your pricing model?",
      answer: "Our pricing is transparent and flexible. We offer various plans to suit different needs, from individual users to enterprise solutions. Contact our sales team for detailed pricing information."
    },
    {
      id: 2,
      question: "Do you sign NDAs?",
      answer: "Yes, absolutely! We can sign your standard NDA. We understand that your business needs and our customer conversations must be treated with full confidentiality. Many of our best customers work with us under NDA.",
    
    },
    {
      id: 3,
      question: "Who owns IP?",
      answer: "You retain full ownership of your intellectual property. Any work product, ideas, or innovations that result from our collaboration remain your property. We simply provide the tools and services to help you achieve your goals."
    },
    {
      id: 4,
      question: "How do time zones work?",
      answer: "We work across multiple time zones to provide the best service possible. Our team is distributed globally, ensuring that we can provide support and services during your business hours, regardless of your location."
    },
    {
      id: 5,
      question: "What about Security & privacy?",
      answer: "Security and privacy are our top priorities. We implement industry-standard encryption, secure data handling practices, and regular security audits. Your data is protected with enterprise-grade security measures and we never share your information with third parties."
    },
    {
      id: 6,
      question: "What happens After launch?",
      answer: "After launch, we provide ongoing support and maintenance. This includes monitoring, updates, bug fixes, and feature enhancements. We're committed to ensuring your solution continues to perform optimally long after the initial deployment."
    },
    {
      id: 7,
      question: "How do the AI questions work?",
      answer: "Our AI systems ask relevant follow-up questions to better understand your requirements. This ensures we deliver solutions that match your specific needs. The AI learns from your responses to provide increasingly personalized assistance.",
   
    }
  ];

  const toggleExpanded = (id: number): void => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white pb-0  px-8 md:p-8 pt-2">
      <div className="max-w-4xl mx-auto">
     
         <h2 
            className="text-3xl md:text-6xl font-bold leading-tight text-center mb-12"
            style={{
              background: 'linear-gradient(180deg, #FFF 30%, #A5C7D4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            FAQ
          </h2>
        
        <div className="space-y-4">
          {faqData.map((item: FAQItem) => (
            <div 
              key={item.id} 
              className={`border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 ${
                item.isHighlighted ? 'bg-blue-600/20 border-blue-500' : 'bg-gray-900/50'
              }`}
            >
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors duration-200"
                type="button"
                aria-expanded={expandedItems[item.id] || false}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="text-lg font-medium pr-4">{item.question}</span>
                <div className="flex-shrink-0">
                  {expandedItems[item.id] ? (
                    <Minus className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 bg-[linear-gradient(90deg,#01AAFF_0%,rgba(1,170,255,0.40)_100%)] ease-in-out ${
                  expandedItems[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="pt-4 ">
                    <p className="text-white leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;