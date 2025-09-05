'use client';

import { useState } from 'react';
import Star from "../../../public/assets/Hero/star.svg";
import Image from 'next/image';
import bg from '../../../public/assets/Hero/bg.svg';
import Icon from "../../../public/assets/navbar/navbuttonicon.svg";
import Shivai from "../../../public/assets/HeroSection/ShivAi.svg";
import user from "../../../public/assets/HeroSection/user.svg";
import fill from '../../../public/assets/HeroSection/fill.svg';
import Mic from '../../../public/assets/HeroSection/mic.svg';
import v1 from "../../../public/assets/HeroSection/v1.svg";
import v2 from "../../../public/assets/HeroSection/v2.svg";
import v3 from "../../../public/assets/HeroSection/v3.svg";
import submit from "../../../public/assets/HeroSection/sumit.svg";

const checkmark = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L5.53 12.7a.996.996 0 10-1.41 1.41L9 19l11-11a.996.996 0 10-1.41-1.41L9 16.17z'/%3E%3C/svg%3E";

interface FormData {
  idea: string;
  email: string;
  name: string;
  company: string;
  needIn30Days: boolean;
}

const HeroSection = () => {
  const [formData, setFormData] = useState<FormData>({
    idea: '',
    email: '',
    name: '',
    company: '',
    needIn30Days: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [questions, setQuestions] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : value
    }));
    if (name === 'idea' && value.length === 0) {
      setShowForm(false);
    }
  };

  const handleIdeaInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, idea: value }));
    setShowForm(value.length > 0);
  };

  const handleIdeaInputFocus = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    alert('Thank you! We\'ll be in touch soon.');
  };

  const handleDoMagic = () => {
    const generatedQuestions = [
      "Who is the first target user and what problem do they face today?",
      "What's the biggest pain point your target user experiences currently?",
      "How do they solve this problem right now without your app?"
    ];
    setQuestions(generatedQuestions);
    setShowQuestions(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentAnswer('');
  };

  const handleAnswerSubmit = () => {
    if (currentAnswer.trim()) {
      const newAnswers = [...answers, currentAnswer];
      setAnswers(newAnswers);
      setCurrentAnswer('');
      setIsInputExpanded(false);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowQuestions(false);
        setShowCompletion(true);
      }
    }
  };

  const handleInputFocus = () => {
    setIsInputExpanded(true);
  };

  const handleInputBlur = () => {
    if (!currentAnswer.trim()) {
      setIsInputExpanded(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleAnswerSubmit();
    }
  };

  const handleBookConsult = () => {
    console.log('Booking consultation...');
    alert('Redirecting to consultation booking...');
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>




      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-25 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Hidden on desktop (lg and above) */}
          <h1 className="lg:hidden text-3xl md:text-7xl font-bold mt-4 mb-4 leading-tight bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
            From Idea to Impact in 60 Days
          </h1>

          {/* Subtitle - Hidden on desktop (lg and above) */}
          <p className="lg:hidden text-sm md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-normal leading-relaxed text-center">
            Tell Us Your Idea In Your Own Words. We'll Design, Build, And Launch Your
            MVP—Fixed Price. AI-First. Hand-In-Hand.
          </p>

          <div className="hidden md:block">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
              From Idea to Impact
              <br />
              in 60 Days
            </h1>
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-normal leading-relaxed">
              Tell Us Your Idea In Your Own Words. We'll Design, Build, And Launch Your<br />
              MVP—Fixed Price. AI-First. Hand-In-Hand.
            </p>
          </div>
          {showCompletion ? (
            /* Completion UI - "All set!" screen - Full width on mobile */
            <div className="w-full sm:max-w-2xl mx-auto mb-8 px-2 sm:px-4 md:px-0">
              <div className="bg-black/40 backdrop-blur-lg rounded-none sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-0 sm:border border-blue-500/30 min-h-screen sm:min-h-0">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Quick Questions</h2>
                  <p className="text-gray-300 text-sm sm:text-base px-2">
                    Great! Let Me Ask You A Few Quick Questions To Better Understand Your Idea.
                  </p>
                </div>

                <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2 px-2">
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center flex-shrink-0">
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 rounded-xs flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${showCompletion
                            ? 'bg-[#0093DD] text-white'
                            : index === currentQuestion
                              ? 'bg-[#0093DD] text-white'
                              : index < currentQuestion
                                ? 'bg-[#0093DD]/80 text-white'
                                : 'bg-white/10 text-gray-500 border border-white/20'
                          }`}
                      >
                        {showCompletion ? (
                          <img src={checkmark} alt="Completed" className="w-3 h-3 sm:w-4 sm:h-4" />
                        ) : index < currentQuestion ? (
                          <img src={checkmark} alt="Completed" className="w-3 h-3 sm:w-4 sm:h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < questions.length - 1 && (
                        <div
                          className={`w-4 sm:w-8 h-0.5 mx-1 transition-all duration-500 ${showCompletion
                              ? 'bg-[#0093DD]'
                              : index < currentQuestion
                                ? 'bg-[#0093DD]'
                                : 'bg-white/10'
                            }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Previous Questions Summary */}
                <div className="mb-8 sm:mb-10 max-h-80 sm:max-h-96 overflow-y-auto space-y-4 sm:space-y-6 pr-1 sm:pr-3 custom-aesthetic-scroll">
                  {questions.map((question, index) => (
                    <div key={index} className="space-y-4 sm:space-y-6 px-2 sm:px-0">
                      {/* Question - Left side */}
                      <div className="flex justify-start">
                        <div className="flex items-start gap-2 sm:gap-3 max-w-full">
                          <Image src={Shivai} alt="" className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 mt-0.5" />
                          <div className="bg-[#0093DD] backdrop-blur-sm rounded-lg rounded-br-xs p-3 border border-cyan-400/30 max-w-[calc(100vw-80px)] sm:max-w-[calc(100vw-220px)] lg:max-w-2xl overflow-hidden">
                            <p className="text-cyan-100 font-medium text-sm sm:text-base break-words whitespace-pre-wrap overflow-wrap-anywhere">
                              {question}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Answer - Right side (if exists) */}
                      {answers[index] && (
                        <div className="flex justify-end">
                          <div className="flex items-start gap-2 sm:gap-3 max-w-full">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg rounded-tl-xs p-3 border border-white/20 max-w-[calc(100vw-80px)] sm:max-w-[calc(100vw-220px)] lg:max-w-2xl overflow-hidden">
                              <p className="text-white text-sm sm:text-base break-words whitespace-pre-wrap overflow-wrap-anywhere hyphens-auto">
                                {answers[index]}
                              </p>
                            </div>
                            <Image src={user} alt="user" className="w-7 h-7 sm:w-9 sm:h-9 flex-shrink-0 mt-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* CSS for aesthetic white scrollbar */}
                <style jsx>{`
  .custom-aesthetic-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar {
    width: 5px;
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 3px;
    margin: 6px 0;
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg, 
      rgba(255, 255, 255, 0.7) 0%, 
      rgba(255, 255, 255, 0.5) 50%, 
      rgba(255, 255, 255, 0.7) 100%
    );
    border-radius: 3px;
    transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    box-shadow: 
      0 2px 4px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      180deg, 
      rgba(255, 255, 255, 0.85) 0%, 
      rgba(255, 255, 255, 0.65) 50%, 
      rgba(255, 255, 255, 0.85) 100%
    );
    box-shadow: 
      0 3px 6px rgba(255, 255, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
    transform: scaleX(1.3);
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar-thumb:active {
    background: linear-gradient(
      180deg, 
      rgba(255, 255, 255, 0.95) 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      rgba(255, 255, 255, 0.95) 100%
    );
    box-shadow: 
      0 1px 3px rgba(255, 255, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  
  .custom-aesthetic-scroll::-webkit-scrollbar-corner {
    background: transparent;
  }
  
  /* Smooth scroll behavior */
  .custom-aesthetic-scroll {
    scroll-behavior: smooth;
  }
`}</style>

                {/* Success Animation */}
                <div className="text-center mb-6 sm:mb-8 px-2">
                  <div className="w-fit mx-auto text-center border-2 py-2 sm:py-3 px-3 sm:px-4 mb-6 sm:mb-8 rounded-2xl bg-[#70BEFABF]/10 border-amber-100/10">
                    <p className="text-white text-xs sm:text-sm">
                      ... Perfect! Our Architects Are On It. Expect Your Proposal In 24 Hours. Or Earlier...
                    </p>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-6 mx-auto text-start">
                    {/* Success Icon */}
                    <div className="relative inline-block pl-6 md:pl-0 pb-2">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#0F0F0F] to-black/20 rounded-full border-4 border-white/40 flex items-center justify-center shadow-2xl">
                        <img src={checkmark} alt="Success" className="w-10 h-10 sm:w-12 sm:h-12" />
                      </div>
                      <div className="absolute inset-0 rounded-full blur-xl animate-pulse"></div>
                    </div>

                    {/* Progress Message */}
                    <div>
                      <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 px-2 md:text-center sm:mb-4">All set!</h2>
                      <p className="text-white/40 text-sm sm:text-lg sm:mb-8 px-2 sm:px-4">
                        Check Your Email For A Confirmation And Next Steps.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Final CTA Button */}
                <div className="flex justify-center px-2 sm:px-4 pb-4">
                  <button
                    onClick={handleBookConsult}
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 w-full sm:w-auto max-w-sm"
                  >
                    <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                      Book a 15-min consult
                    </span>
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center ml-1">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full flex items-center justify-center">
                        <Image src={Icon} alt="icon" className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : showQuestions ? (
            /* Quick Questions Interface */
            <div className="w-full max-w-2xl mx-auto mb-8 px-4 sm:px-0">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-4 sm:p-6 lg:p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Quick Questions</h2>
                  <p className="text-gray-300 text-sm sm:text-base px-2">
                    Great! Let Me Ask You A Few Quick Questions To Better Understand Your Idea.
                  </p>
                </div>

                {/* Progress Indicators - Horizontal dots */}
                <div className="flex justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2">
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center flex-shrink-0">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-xs flex items-center justify-center text-xs font-bold transition-all duration-300 ${index === currentQuestion
                          ? 'bg-[#0093DD] text-white shadow-lg shadow-blue-500/50'
                          : index < currentQuestion
                            ? 'bg-[#0093DD] text-white'
                            : 'bg-white/10 text-gray-500 border border-white/20'
                        }`}>
                        {index < currentQuestion ? (
                          <img src={checkmark} alt="Completed" className="w-3 h-3 sm:w-4 sm:h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < questions.length - 1 && (
                        <div className={`w-4 sm:w-8 h-0.5 mx-1 transition-all duration-500 ${index < currentQuestion ? 'bg-[#0093DD]' : 'bg-white/10'
                          }`}></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Show all previous Q&A with scroll if needed */}
                {currentQuestion > 0 && (
                  <div
                    className="mb-6 max-h-32 sm:max-h-40 overflow-y-auto space-y-3 sm:space-y-4 pr-2 scrollbar-hide"
                    style={{
                      scrollbarWidth: 'none', /* Firefox */
                      msOverflowStyle: 'none', /* Internet Explorer 10+ */
                    }}
                  >
                    {/* Show all previous questions and answers */}
                    <div className="space-y-3">
                      {Array.from({ length: currentQuestion }).map((_, index) => (
                        <div key={index} className="space-y-2">
                          {/* Previous Question - Left side */}
                          <div className="flex justify-start">
                            <div className="flex items-start gap-2 sm:gap-3 max-w-full">
                              <Image src={Shivai} alt="logo" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                              <div className="bg-[#0093DD] backdrop-blur-sm rounded-md rounded-br-xs p-2 sm:p-3 border border-cyan-400/30 max-w-[calc(100vw-120px)] sm:max-w-[calc(100vw-200px)] lg:max-w-xl">
                                <p className="text-white text-xs sm:text-sm font-medium break-words whitespace-pre-wrap overflow-wrap-anywhere">
                                  {questions[index]}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Previous Answer - Right side */}
                          {answers[index] && (
                            <div className="flex justify-end">
                              <div className="flex items-start gap-2 sm:gap-3 max-w-full">
                                <div className="bg-white/10 backdrop-blur-sm rounded-md rounded-tl-xs p-2 sm:p-3 border border-white/20 max-w-[calc(100vw-120px)] sm:max-w-[calc(100vw-200px)] lg:max-w-xl overflow-hidden">
                                  <p className="text-white text-xs sm:text-sm break-words whitespace-pre-wrap overflow-wrap-anywhere hyphens-auto">
                                    {answers[index]}
                                  </p>
                                </div>
                                <Image src={user} alt="image" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0 mt-0.5" />
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CSS for completely hidden scrollbar */}
                <style jsx>{`
  .scrollbar-hide {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`}</style>

                {/* Current Question - Left side */}
                <div className="mb-6 sm:mb-8">
                  <div className="flex justify-start">
                    <div className="flex items-start gap-2 sm:gap-3 max-w-full">
                      <div className="bg-[#0093DD] text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Image src={Shivai} alt="" className="w-7 h-7 sm:w-8 sm:h-8" />
                      </div>
                      <div className="bg-[#0093DD] backdrop-blur-sm rounded-md rounded-br-xs p-3 border border-cyan-400/30 max-w-[calc(100vw-120px)] sm:max-w-[calc(100vw-200px)] lg:max-w-2xl">
                        <p className="text-white text-sm sm:text-base leading-relaxed font-medium break-words whitespace-pre-wrap">
                          {questions[currentQuestion]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Answer Input - Expandable */}
                <div className="relative mb-4 sm:mb-6">
                  <div className="rounded-2xl p-[1px] bg-gradient-to-t from-black-400/50 to-blue-500/30">
                    <div className="relative">
                      {isInputExpanded ? (
                        <>
                          <Image src={Star} alt="Star" className="absolute left-3 sm:left-4 top-3 sm:top-4 w-4 h-4 sm:w-5 sm:h-5 z-10" />
                          <textarea
                            value={currentAnswer}
                            onChange={(e) => setCurrentAnswer(e.target.value)}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            onKeyDown={handleKeyPress}
                            placeholder="Type your answer..."
                            rows={4}
                            className="w-full rounded-2xl border-none bg-black/80 pl-10 sm:pl-12 pr-16 sm:pr-20 py-3 sm:py-4 pb-12 sm:pb-16 text-base sm:text-lg text-white placeholder-gray-400 focus:outline-none resize-none scrollbar-hide"
                            style={{
                              scrollbarWidth: 'none', /* Firefox */
                              msOverflowStyle: 'none', /* Internet Explorer 10+ */
                            }}
                          />
                          {/* Buttons positioned inside textarea at bottom right */}
                          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex items-center gap-2 sm:gap-3">
                            <button
                              onClick={handleAnswerSubmit}
                              disabled={!currentAnswer.trim()}
                              className="bg-[#00ABEB] hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-medium p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                            >
                              <Image src={submit} alt="Send" className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 w-full rounded-2xl border-none bg-black/80 px-3 py-3 sm:py-4">
                            <Image
                              src={Star}
                              alt="Star"
                              className="w-4 h-4 sm:w-5 sm:h-5 z-10"
                            />
                            <input
                              type="text"
                              value={currentAnswer}
                              onChange={(e) => setCurrentAnswer(e.target.value)}
                              onFocus={handleInputFocus}
                              onKeyDown={handleKeyPress}
                              placeholder="Type your answer..."
                              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg"
                            />
                          </div>

                          {/* Buttons positioned inside input at right side */}
                          <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-3">
                            <button
                              onClick={handleDoMagic}
                              className="bg-[#00ABEB] hover:bg-blue-600 text-white rounded-full p-1.5 sm:p-2 border border-white transition-colors duration-300 group"
                            >
                              <Image
                                src={Mic}
                                alt="Microphone"
                                className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:scale-110 transition-transform duration-300"
                              />
                            </button>

                            <button
                              onClick={handleAnswerSubmit}
                              disabled={!currentAnswer.trim()}
                              className="bg-blue-500 hover:bg-blue-200 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-medium p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                            >
                              <Image src={submit} alt="Send" className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-400 text-xs sm:text-sm px-2">
                  Press Ctrl+Cmd + Enter To Submit Quickly
                </p>
              </div>
            </div>
          ) : !showForm ? (
            <div className="max-w-2xl mx-auto mb-8">
              {/* Search-style Input */}
              <div className="relative">
                <div className="absolute inset-0 rounded-[25.875px] bg-[#5255f7] blur-lg "></div>
                <div className="absolute inset-0 rounded-[25.875px] bg-[#02324F] blur-lg "></div>
                <div className="relative rounded-3xl px-[2px] p-[1px] bg-gradient-to-b from-white/80 to-white/20">


                  <input
                    type="text"
                    name="idea"
                    value={formData.idea}
                    onChange={handleIdeaInputChange}
                    onFocus={handleIdeaInputFocus}
                    placeholder="ask anything..."
                    className="w-full rounded-3xl border-none bg-[#001824] pl-12 pr-16 py-4 text-lg text-white placeholder-gray-400 focus:outline-none relative z-10"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center z-10">
                    <Image src={fill} alt="Star icon" className="w-6 h-6" />
                  </div>
                  <button
                    onClick={handleDoMagic}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 border-1 border-white transition-colors duration-300 group z-10"
                  >
                    <Image src={Mic} alt="Microphone" className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="space-y-6">
                {/* Main Idea Input */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-xl animate-pulse"></div>
                  <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-white/80 to-transparent">
                    <div className="relative">
                      <Image src={fill} alt="Star" className="absolute left-4 top-4 w-5 h-5 z-10" />
                      <textarea
                        name="idea"
                        value={formData.idea}
                        onChange={handleInputChange}
                        placeholder="I want an AI app that looks when appointments are missed..."
                        rows={4}
                        className={`w-full rounded-2xl border-none bg-[#001824] pl-12 py-4 text-lg text-white placeholder-gray-400 focus:outline-none resize-none scrollbar-hide transition-all duration-300 ${formData.idea && formData.idea.length > 80 ? 'pr-16' : 'pr-32'
                          }`}
                        style={{
                          scrollbarWidth: 'none', /* Firefox */
                          msOverflowStyle: 'none', /* Internet Explorer 10+ */
                        }}
                      />

                      {/* Dynamic button - transforms from full button to circular icon */}
                      <div className="absolute right-3 bottom-4 flex items-center gap-x-2">
                        <button
                          onClick={handleDoMagic}
                          className={`bg-[#00ABEB] text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center justify-center ${formData.idea && formData.idea.length > 80
                              ? 'w-10 h-10 p-0' // Circular mode - only icon
                              : 'px-4 py-2 gap-1' // Full button mode - icon + text
                            }`}
                          title={formData.idea && formData.idea.length > 80 ? 'Do the magic' : undefined}
                        >
                          <Image
                            src={fill}
                            alt="star"
                            className={`transition-all duration-300 ${formData.idea && formData.idea.length > 80
                                ? 'w-5 h-5' // Larger icon when circular
                                : 'w-4 h-4' // Smaller icon when with text
                              }`}
                          />
                          {/* Text that fades out when button becomes circular */}
                          <span
                            className={`text-sm transition-all duration-300 overflow-hidden ${formData.idea && formData.idea.length > 80
                                ? 'w-0 opacity-0' // Hidden when circular
                                : 'w-auto opacity-100' // Visible when full button
                              }`}
                          >
                            Do the magic
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* CSS for hiding scrollbar */}
                  <style jsx>{`
    .scrollbar-hide {
      -ms-overflow-style: none;  /* Internet Explorer 10+ */
      scrollbar-width: none;  /* Firefox */
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;  /* Safari and Chrome */
    }
  `}</style>
                </div>
                {/* Form Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/40 to-white/10">

                      <div className="flex items-center gap-2  bg-[#023D5A] px-3 rounded-2xl">
                        <Image
                          src={v3}
                          alt="My Image"
                          width={20}
                          height={20}
                          className=" object-contain"
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter Email"
                          className="w-full bg-transparent  py-3 text-white placeholder-gray-400 focus:outline-none"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="relative">
                    <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/40 to-white/10">

                      <div className="flex items-center gap-2 rounded-2xl bg-[#023D5A] px-3">
                        <Image
                          src={v1}
                          alt="My Image"
                          width={20}
                          height={20}
                          className="rounded-xl object-contain"
                        />

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Name"
                          className="w-full rounded-2xl border-none bg-[#023D5A] py-3 text-[#FFFFFF] font-xs placeholder-gray-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/40 to-white/10">
                    <div className="flex items-center gap-2 rounded-2xl bg-[#023D5A] px-3">
                      <Image
                        src={v2}
                        alt="My Image"
                        width={20}
                        height={20}
                        className="rounded-xl object-contain"
                      />

                      <input
                        type="text"
                        name="Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company"
                        className="w-full rounded-2xl border-none bg-[#023D5A]  py-3 text-white placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  {/* Mirror the outer wrapper styling */}
                  <div className="rounded-2xl p-[1px] bg-[#023D5A]">
                    <div className="rounded-2xl  ">
                      <div className="flex items-center justify-between px-4 py-3">
                        <label
                          htmlFor="needIn30Days"
                          className="text-white text-sm cursor-pointer"
                        >
                          Need in 30 days?
                        </label>
                        <input
                          type="checkbox"
                          name="needIn30Days"
                          id="needIn30Days"
                          checked={formData.needIn30Days}
                          onChange={handleInputChange}
                          className="relative w-10 h-5 bg-gray-700 rounded-full appearance-none cursor-pointer
             checked:bg-blue-600 transition-colors duration-300
             before:content-[''] before:absolute before:top-0.5 before:left-0.5
             before:w-4 before:h-4 before:bg-white before:rounded-full before:transition-transform
             before:duration-300 checked:before:translate-x-5"
                        />

                      </div>

                    </div>
                  </div>
                </div>


                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                      {isSubmitting ? 'Submitting...' : 'Book a 15-min consult'}
                    </span>
                    {!isSubmitting && (
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-1">
                        <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                          <Image src={Icon} alt="icon" className="w-3 h-3" />
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
          {!showForm && !showCompletion && (
            <div className="flex justify-center mb-12">
              <button
                onClick={() => setShowForm(true)}
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40 w-fit mx-auto"
              >
                <span className="text-sm font-semibold tracking-wide bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                  Book a 15-min consult
                </span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-1 group-hover:translate-x-0.5 transition-transform duration-300">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <Image src={Icon} alt="icon" className="w-3 h-3" />
                  </div>
                </div>
              </button>
            </div>
          )}
          <p className="text-white text-sm md:text-lg max-w-8xl mx-auto">
            Architected in the U.S. Engineered By A Handpicked Global Team.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;