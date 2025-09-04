'use client';

import { useState } from 'react';
import Star from "../../../public/assets/Hero/star.svg";
import Image from 'next/image';
import bg from '../../../public/assets/Hero/bg.svg';
import Icon from "../../../public/assets/navbar/navbuttonicon.svg";

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
            /* Completion UI - "All set!" screen */
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">Quick Questions</h2>
                  <p className="text-gray-300 text-base">
                    Great! Let Me Ask You A Few Quick Questions To Better Understand Your Idea.
                  </p>
                </div>

                <div className="flex justify-center items-center gap-3 mb-10">
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold transition-all duration-300 ${showCompletion
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                          : index === currentQuestion
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                            : index < currentQuestion
                              ? 'bg-cyan-600/80 text-white'
                              : 'bg-white/10 text-gray-500 border border-white/20'
                          }`}
                      >
                        {showCompletion ? (
                          <img src={checkmark} alt="Completed" className="w-4 h-4" />
                        ) : index < currentQuestion ? (
                          <img src={checkmark} alt="Completed" className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < questions.length - 1 && (
                        <div
                          className={`w-8 h-0.5 mx-1 transition-all duration-500 ${showCompletion
                            ? 'bg-cyan-500'
                            : index < currentQuestion
                              ? 'bg-cyan-500'
                              : 'bg-white/10'
                            }`}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>


                {/* Previous Questions Summary */}
                <div className="mb-8 space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-400/20">
                      <div className="flex items-start gap-3">
                        <div className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          Q
                        </div>
                        <div className="flex-1">
                          <p className="text-cyan-200 text-sm mb-2 font-medium">{question}</p>
                          {answers[index] && (
                            <div className="flex items-start gap-2">
                              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-white text-xs">👤</span>
                              </div>
                              <p className="text-white text-sm">{answers[index]}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Success Animation */}
                <div className="text-center mb-8">
                   <div className="text-center mb-8">
                  <p className="text-gray-400 text-sm">
                    Perfect! Our Architects Are On It. Expect Your Proposal In 24 Hours. Or Earlier...
                  </p>
                </div>
                  <div className="relative inline-block mb-6">
                    
                    <div className="w-24 h-24 bg-gradient-to-br  from-[#0F0F0F] to-black/20 rounded-full border-4 border-white/40  flex items-center justify-center mx-auto shadow-2xl ">
                      <img src={checkmark} alt="Success" className="w-12 h-12" />
                    </div>
                    <div className="absolute inset-0  rounded-full blur-xl animate-pulse"></div>
                  </div>
                  
                {/* Progress Message */}
               
                  <h2 className="text-4xl font-bold text-white mb-4">All set!</h2>
                  <p className="text-white/40 text-lg mb-8">
                    Check Your Email For A Confirmation And Next Steps.
                  </p>
                </div>


                {/* Final CTA Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleBookConsult}
                    className="flex items-center justify-center gap-2 px-6  py-3 rounded-full transition-all duration-300 bg-black border-2 border-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/40"
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
                      Book a 15-min consult
                    </span>
                    <div className="w-6 h-6 bg-white/20  rounded-full flex items-center justify-center ml-1">
                      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                        <Image src={Icon} alt="icon" className="w-3 h-3" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : showQuestions ? (
            /* Quick Questions Interface */
            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">Quick Questions</h2>
                  <p className="text-gray-300 text-base">
                    Great! Let Me Ask You A Few Quick Questions To Better Understand Your Idea.
                  </p>
                </div>

                {/* Progress Indicators - Horizontal dots */}
                <div className="flex justify-center items-center gap-3 mb-10">
                  {questions.map((_, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold transition-all duration-300 ${index === currentQuestion
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                        : index < currentQuestion
                          ? 'bg-cyan-600/80 text-white'
                          : 'bg-white/10 text-gray-500 border border-white/20'
                        }`}>
                        {index < currentQuestion ? (
                          <img src={checkmark} alt="Completed" className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      {index < questions.length - 1 && (
                        <div className={`w-8 h-0.5 mx-1 transition-all duration-500 ${index < currentQuestion ? 'bg-cyan-500' : 'bg-white/10'
                          }`}></div>
                      )}
                    </div>
                  ))}
                </div>

               
                {currentQuestion > 0 && (
                  <div className="mb-6 max-h-64 overflow-y-auto space-y-3 pr-2">
                    {Array.from({ length: currentQuestion }).map((_, index) => (
                      <div key={index} className="bg-cyan-500/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-400/20">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            Q
                          </div>
                          <p className="text-cyan-200 text-sm font-medium flex-1">{questions[index]}</p>
                        </div>
                        <div className="flex items-start gap-3 ml-9">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs">👤</span>
                          </div>
                          <p className="text-white text-sm flex-1">{answers[index]}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Current Question */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-1 mb-6">
                    <div className="bg-cyan-500/30 rounded-2xl p-6 border border-cyan-400/20">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#0093DD] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <span className="text-sm font-bold">Q</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white text-lg leading-relaxed font-medium">
                            {questions[currentQuestion]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* User Type Indicator */}
                  <div className="flex items-center justify-between mb-8 px-2">
                    <span className="text-gray-300 text-sm">Early-stage startup founders</span>
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                      <span className="text-white text-sm">👤</span>
                    </div>
                  </div>
                </div>

                {/* Answer Input - Expandable */}
                <div className="relative mb-6">
                <div className="rounded-2xl p-[1px] bg-gradient-to-t from-cyan-400/50 to-blue-500/30">
                    {isInputExpanded ? (
                      <div className="relative">
                        <Image src={Star} alt="Star" className="absolute left-4 top-4 w-5 h-5 z-10" />
                        <textarea
                          value={currentAnswer}
                          onChange={(e) => setCurrentAnswer(e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          onKeyDown={handleKeyPress}
                          placeholder="Type your answer..."
                          rows={4}
                          className="w-full rounded-2xl border-none bg-black/80 pl-12 pr-20 py-4 text-lg text-white placeholder-gray-400 focus:outline-none resize-none"
                        />

                
                       
                        <button
                          onClick={handleAnswerSubmit}
                          disabled={!currentAnswer.trim()}
                          className="absolute right-3 bottom-3 bg-blue-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white text-sm font-medium px-2 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 z-10 flex items-center gap-1"

                        >
                          <Image src={submit} alt="Send" className="w-6 h-6" />
                        
                        </button>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={currentAnswer}
                        onChange={(e) => setCurrentAnswer(e.target.value)}
                        onFocus={handleInputFocus}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your answer..."
                        className="w-full rounded-2xl border-none bg-black/80 px-6 py-4 pr-24 text-white placeholder-gray-400 focus:outline-none text-lg"
                      />
                    )}
                    {!isInputExpanded && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2.5 transition-all duration-300 hover:scale-110 shadow-lg">
                          <Image src={Mic} alt="Voice" className="w-6 h-6" />
                        </button>
                       
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-center text-gray-400 text-sm">
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
                        className="w-full rounded-2xl border-none bg-[#001824] pl-12 pr-20 py-4 text-lg text-white placeholder-gray-400 focus:outline-none resize-none"
                      />
                      <div>
                      </div>
                      <div className="absolute right-3 bottom-4 flex items-center gap-x-2">
                        <button
                          onClick={handleDoMagic}
                          className="bg-[#00ABEB] hover:bg-blue-600 text-white rounded-full p-1 border border-white transition-colors duration-300 group"
                        >
                          <Image
                            src={Mic}
                            alt="Microphone"
                            className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </button>
                        <button
                          onClick={handleDoMagic}
                          className="bg-[#00ABEB] text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center gap-1"
                        >
                          <Image src={fill} alt="star" className="w-4 h-4" />
                          <span>Do the magic</span>
                        </button>
                      </div>
                    </div>
                  </div>
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