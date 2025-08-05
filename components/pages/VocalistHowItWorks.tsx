import React, { useState } from 'react';
import Link from 'next/link';
import { 
  UserPlus, 
  CheckCircle, 
  Mic, 
  Eye, 
  Music, 
  Headphones, 
  Youtube, 
  Globe,
  ArrowDown,
  Users,
  Award,
  Clock,
  Star,
  Heart,
  Play,
  Volume2
} from 'lucide-react';

const VocalistHowItWorks = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const processSteps = [
    {
      number: 1,
      title: "Join Vocalist Pool",
      subtitle: "Create your free vocalist profile on SufiPulse",
      description: "Submit your vocal range, languages, and sample recordings to join our global pool.",
      icon: UserPlus,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      details: [
        "Complete vocalist profile setup",
        "Upload vocal samples",
        "Specify languages and styles",
        "Join global vocalist community"
      ]
    },
    {
      number: 2,
      title: "Profile Review",
      subtitle: "Our team evaluates your vocal abilities",
      description: "We assess your vocal quality, spiritual alignment, and technical capabilities.",
      icon: CheckCircle,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
      details: [
        "Vocal quality assessment",
        "Spiritual alignment evaluation",
        "Technical capability review",
        "Welcome to vocalist pool"
      ]
    },
    {
      number: 3,
      title: "Project Assignment",
      subtitle: "Get matched with perfect kalam projects",
      description: "Our team assigns you to kalam that matches your voice, language, and style.",
      icon: Music,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      details: [
        "Perfect voice-kalam matching",
        "Language compatibility",
        "Style alignment",
        "Sacred content pairing"
      ]
    },
    {
      number: 4,
      title: "Kalam Review",
      subtitle: "Study the sacred poetry and musical direction",
      description: "Receive the kalam, musical arrangement, and spiritual context for your performance.",
      icon: Eye,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
      details: [
        "Sacred poetry study",
        "Musical arrangement review",
        "Spiritual context understanding",
        "Performance preparation"
      ]
    },
    {
      number: 5,
      title: "Recording Session",
      subtitle: "Professional recording at our studio or remotely",
      description: "Record your vocals with our expert engineers, either in-person or through remote coordination.",
      icon: Mic,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      details: [
        "Professional studio recording",
        "Expert engineer guidance",
        "Remote recording support",
        "Multiple take options"
      ]
    },
    {
      number: 6,
      title: "Production & Mixing",
      subtitle: "Your vocals are professionally produced",
      description: "Our team handles all mixing, mastering, and final production work.",
      icon: Headphones,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
      details: [
        "Professional mixing",
        "Audio mastering",
        "Quality enhancement",
        "Final production polish"
      ]
    },
    {
      number: 7,
      title: "Global Publication",
      subtitle: "Your performance reaches the world",
      description: "Published on YouTube and SufiPulse.com with full credit for your vocal contribution.",
      icon: Youtube,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      details: [
        "YouTube publication",
        "SufiPulse.com feature",
        "Full vocalist credit",
        "Professional presentation"
      ]
    },
    {
      number: 8,
      title: "Spiritual Impact",
      subtitle: "Your voice touches hearts globally",
      description: "Experience the joy of knowing your voice carries sacred words to souls worldwide.",
      icon: Globe,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      details: [
        "Global audience reach",
        "Spiritual impact tracking",
        "Community appreciation",
        "Sacred service fulfillment"
      ]
    }
  ];

  const highlights = [
    {
      icon: Mic,
      title: "100% Free for Vocalists",
      description: "Professional recording and production services at no cost",
      stats: "0 fees, 100% free"
    },
    {
      icon: Users,
      title: "Global Writer Pool",
      description: "Collaborate with sacred poets from around the world",
      stats: "89+ writers worldwide"
    },
    {
      icon: Award,
      title: "Full Credit Always",
      description: "Your vocal contribution prominently displayed everywhere",
      stats: "100% attribution guarantee"
    }
  ];

  const testimonials = [
    {
      name: "Muhammad Ali",
      location: "Istanbul, Turkey",
      quote: "The vocalist journey with SufiPulse is beautifully structured. From assignment to global publication, every step honors the sacred nature of our work.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Fatima Zahra",
      location: "Cairo, Egypt",
      quote: "Understanding the complete process helped me prepare spiritually and technically. The support from the team is exceptional throughout.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Omar Suleiman",
      location: "Fez, Morocco",
      quote: "The clarity of the process allows me to focus purely on the spiritual aspect of vocal performance while the team handles everything else.",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    { number: "8", label: "Simple Steps", icon: CheckCircle },
    { number: "4-6", label: "Weeks Timeline", icon: Clock },
    { number: "100%", label: "Free Service", icon: Award },
    { number: "200+", label: "Successful Collaborations", icon: Heart }
  ];

  const faqs = [
    {
      question: "How long does the vocalist journey take?",
      answer: "From assignment to publication typically takes 4-6 weeks, depending on recording complexity and your availability for sessions."
    },
    {
      question: "Can I suggest changes to the musical arrangement?",
      answer: "Yes! We welcome your input on musical arrangements. Our team values your expertise and will consider suggestions that enhance the spiritual message."
    },
    {
      question: "What if I need multiple recording sessions?",
      answer: "We provide as many sessions as needed to achieve the perfect recording. Quality and spiritual authenticity are more important than speed."
    },
    {
      question: "Do I get to approve the final mix?",
      answer: "Absolutely. You'll receive the final mix for review and approval before publication. We want you to be completely satisfied with the result."
    },
    {
      question: "What languages and styles do you work with?",
      answer: "We work with vocalists in 15+ languages and all styles from traditional Qawwali to contemporary spiritual anthems and whisper kalam."
    },
    {
      question: "Is there really no cost for vocalists?",
      answer: "Completely free. All recording, production, and distribution costs are covered by SufiPulse as our sacred service to the global ummah."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-50">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-emerald-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              How It Works for Vocalists
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-4 max-w-4xl mx-auto">
              Your Sacred Journey from Voice to Global Spiritual Impact
            </p>
            <p className="text-lg text-slate-500 max-w-3xl mx-auto mb-8">
              Discover the complete SufiPulse vocalist experience—from joining our pool to touching hearts worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-vocalist-pool"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Join Vocalist Pool
              </Link>
              <Link
                href="/vocalists"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
              >
                Meet Our Vocalists
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">The Complete Vocalist Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Every step designed to honor your sacred voice while providing world-class production support
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 to-slate-200 hidden lg:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.number} className={`relative flex items-center ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-emerald-200 flex items-center justify-center z-10 hidden lg:flex shadow-lg">
                    <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden transform hover:scale-105 transition-all duration-300">
                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${step.color} p-6 text-white`}>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                                Step {step.number}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                          </div>
                        </div>
                      </div>
                      
                      {/* Card Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-slate-800 mb-3">
                          {step.subtitle}
                        </h4>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Timeline Indicator */}
                  <div className="lg:hidden absolute -left-4 top-8 w-8 h-8 bg-white rounded-full border-4 border-emerald-200 flex items-center justify-center shadow-lg">
                    <span className="text-sm font-bold text-emerald-600">{step.number}</span>
                  </div>
                  
                  {/* Arrow for larger screens */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-full mt-8">
                      <ArrowDown className="w-6 h-6 text-emerald-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Why Vocalists Choose SufiPulse
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the complete journey from sacred voice to global spiritual impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{highlight.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-3">{highlight.description}</p>
                  <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                    {highlight.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Vocalist Experiences</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Hear from vocalists who have experienced the complete SufiPulse journey
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-8 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <blockquote className="text-2xl lg:text-3xl font-light italic leading-relaxed mb-6">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-xl text-emerald-300">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-slate-300">
                      Vocalist • {testimonials[activeTestimonial].location}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-4 ring-4 ring-emerald-400"
                  />
                </div>
              </div>
              
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === activeTestimonial ? 'bg-emerald-400' : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about the SufiPulse vocalist journey</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-slate-100 shadow-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sacred Promise */}
      <div className="bg-slate-800 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-700 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Our Sacred Promise to Vocalists</h2>
            <blockquote className="text-2xl text-emerald-300 italic mb-6 leading-relaxed">
              "Your voice is a sacred trust. We honor it with world-class production and global reach."
            </blockquote>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Every step of this journey is designed to honor your sacred voice while providing the 
              technical excellence and spiritual reverence your performance deserves. From assignment 
              to global publication, we handle everything while ensuring your vocal contribution is 
              always prominently credited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join-vocalist-pool"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
              >
                Begin Your Journey
              </Link>
              <Link
                href="/vocalists"
                className="bg-slate-600 hover:bg-slate-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
              >
                Meet Our Vocalists
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Summary */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Journey Timeline</h2>
            <p className="text-slate-600">Typical timeframes for each stage of the vocalist process</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <span className="text-sm font-bold text-emerald-600">{step.number}</span>
                </div>
                <h4 className="text-xs font-medium text-slate-800 mb-1">{step.title}</h4>
                <div className="flex items-center justify-center space-x-1 text-xs text-slate-500">
                  <Clock className="w-3 h-3" />
                  <span>
                    {index < 2 ? '1-2 days' : 
                     index < 4 ? '3-5 days' : 
                     index < 6 ? '1-2 weeks' : '1-3 days'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocalistHowItWorks;