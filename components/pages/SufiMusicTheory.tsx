'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Music, 
  BookOpen, 
  Waves, 
  Heart, 
  Brain, 
  Volume2, 
  ArrowRight,
  Play,
  Star,
  Eye,
  Clock,
  User,
  Headphones,
  Mic,
  Award,
  Globe,
  CheckCircle
} from 'lucide-react';

const SufiMusicTheory = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const theoryTopics = [
    {
      id: 'fundamentals',
      title: 'Sacred Fundamentals',
      icon: Music,
      description: 'Core principles of Sufi musical expression and spiritual sound',
      content: {
        overview: "Sufi music theory transcends conventional musical analysis, incorporating spiritual dimensions that transform sound into a vehicle for divine connection.",
        principles: [
          "Intention (Niyyah) as the foundation of sacred sound",
          "Breath (Nafas) as the source of spiritual vibration", 
          "Rhythm (Wazn) as the heartbeat of divine remembrance",
          "Melody (Lahn) as the pathway to transcendence"
        ],
        applications: [
          "Creating music that serves spiritual elevation",
          "Balancing technical excellence with sacred purpose",
          "Understanding the role of silence in sacred composition",
          "Harmonizing traditional forms with contemporary expression"
        ]
      }
    },
    {
      id: 'maqam',
      title: 'Maqam & Spiritual Modes',
      icon: Waves,
      description: 'How traditional modal systems serve spiritual transformation',
      content: {
        overview: "The maqam system in Sufi music serves not just as a melodic framework, but as a spiritual technology for inducing specific states of consciousness.",
        principles: [
          "Each maqam corresponds to different spiritual states",
          "Modal progression mirrors the journey of the soul",
          "Microtonal inflections carry emotional and spiritual weight",
          "Traditional modes preserve centuries of spiritual wisdom"
        ],
        applications: [
          "Selecting appropriate maqams for different kalam themes",
          "Using modal modulation to enhance spiritual narrative",
          "Preserving authentic traditional expressions",
          "Adapting classical modes for contemporary productions"
        ]
      }
    },
    {
      id: 'rhythm',
      title: 'Sacred Rhythms & Dhikr',
      icon: Heart,
      description: 'The spiritual science of rhythm in divine remembrance',
      content: {
        overview: "Rhythm in Sufi music mirrors the natural rhythms of creation—the heartbeat, the breath, the cosmic cycles—creating resonance between the human soul and divine order.",
        principles: [
          "Rhythmic patterns that synchronize with natural breathing",
          "Polyrhythmic structures reflecting cosmic harmony",
          "The role of acceleration in spiritual ecstasy",
          "Silence and space as integral rhythmic elements"
        ],
        applications: [
          "Designing rhythms that support meditative states",
          "Creating polyrhythmic textures for group dhikr",
          "Using tempo changes to guide spiritual journey",
          "Balancing complexity with accessibility"
        ]
      }
    },
    {
      id: 'acoustics',
      title: 'Sacred Acoustics',
      icon: Volume2,
      description: 'The physics and metaphysics of spiritual sound production',
      content: {
        overview: "Sacred acoustics combines scientific understanding of sound with metaphysical principles, creating environments where the divine can resonate through physical space.",
        principles: [
          "Frequency relationships that promote spiritual states",
          "Acoustic spaces designed for sacred resonance",
          "The role of overtones in mystical experience",
          "Harmonic series as reflection of divine order"
        ],
        applications: [
          "Studio design for optimal spiritual recording",
          "Frequency selection for maximum spiritual impact",
          "Creating acoustic environments for live performance",
          "Understanding the physics of vocal projection in sacred space"
        ]
      }
    }
  ];

  const testimonials = [
    {
      name: "Dr. Hassan Al-Sufi",
      location: "Cairo, Egypt",
      role: "Islamic Musicologist",
      quote: "This theoretical framework bridges the gap between traditional Sufi musical wisdom and contemporary production techniques. Essential reading for any serious practitioner.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Sister Amina Wadud",
      location: "Istanbul, Turkey",
      role: "Sufi Music Teacher",
      quote: "The depth of understanding presented here honors both the sacred tradition and the needs of modern spiritual seekers. Beautifully comprehensive.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Prof. Maria Santos",
      location: "Barcelona, Spain",
      role: "Ethnomusicologist",
      quote: "A masterful synthesis of spiritual wisdom and musical science. This work will influence how we understand sacred music for generations to come.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    { number: "1000+", label: "Years of Tradition", icon: BookOpen },
    { number: "25+", label: "Musical Modes", icon: Music },
    { number: "50+", label: "Rhythmic Patterns", icon: Heart },
    { number: "∞", label: "Spiritual Applications", icon: Star }
  ];

  const practicalApplications = [
    {
      title: "For Composers",
      description: "Apply sacred principles to create spiritually resonant compositions",
      techniques: ["Modal selection for spiritual themes", "Rhythmic patterns for dhikr", "Harmonic progressions for transcendence"]
    },
    {
      title: "For Vocalists", 
      description: "Understand how vocal techniques serve spiritual expression",
      techniques: ["Breath control for sustained dhikr", "Microtonal inflection for emotional depth", "Vocal projection in sacred space"]
    },
    {
      title: "For Producers",
      description: "Technical approaches that honor sacred musical principles",
      techniques: ["Frequency selection for spiritual impact", "Reverb design for sacred space", "Dynamic range for spiritual journey"]
    }
  ];

  const currentTopic = theoryTopics.find(topic => topic.id === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Sufi Music
                  <span className="block text-emerald-400">Theory</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Exploring the sacred science behind spiritual sound. Understanding how traditional 
                  Sufi musical principles create pathways to divine connection.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                <p className="text-emerald-300 font-medium mb-2">Sacred Sound Science</p>
                <blockquote className="text-lg italic">
                  "Music is the bridge between the material and spiritual worlds"
                </blockquote>
                <cite className="text-emerald-300 text-sm mt-2 block">— Hazrat Inayat Khan</cite>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/studio"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Headphones className="w-5 h-5" />
                  <span>Visit Our Studio</span>
                </Link>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <Play className="w-5 h-5" />
                  <span>Hear Applications</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sufi Music Theory"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-emerald-600/90 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                    <Music className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Sacred Sound Science</h3>
                  <p className="text-slate-200 text-sm">Where ancient wisdom meets modern understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
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
      </section>

      {/* Theory Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Sacred Music Theory Framework
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive exploration of the principles that guide spiritual musical expression
            </p>
          </div>

          {/* Topic Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {theoryTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTab(topic.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeTab === topic.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{topic.title}</span>
                </button>
              );
            })}
          </div>

          {/* Topic Content */}
          {currentTopic && (
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-600 to-slate-700 p-8 text-white">
                <div className="flex items-center space-x-4">
                  <currentTopic.icon className="w-12 h-12" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{currentTopic.title}</h3>
                    <p className="text-emerald-100">{currentTopic.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-4">Overview</h4>
                    <p className="text-slate-600 leading-relaxed mb-6">{currentTopic.content.overview}</p>
                    
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Core Principles</h4>
                    <ul className="space-y-3">
                      {currentTopic.content.principles.map((principle, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <span className="text-slate-600">{principle}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Practical Applications</h4>
                    <ul className="space-y-3">
                      {currentTopic.content.applications.map((application, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-emerald-500 mt-0.5" />
                          <span className="text-slate-600">{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Practical Applications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Practical Applications
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How sacred music theory translates into real-world spiritual practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practicalApplications.map((application, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {index === 0 && <Music className="w-8 h-8 text-emerald-600" />}
                  {index === 1 && <Mic className="w-8 h-8 text-emerald-600" />}
                  {index === 2 && <Headphones className="w-8 h-8 text-emerald-600" />}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{application.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{application.description}</p>
                <div className="space-y-2">
                  {application.techniques.map((technique, techIndex) => (
                    <div key={techIndex} className="text-sm text-slate-600 bg-slate-50 rounded-lg p-2">
                      {technique}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Scholarly Recognition
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              What leading scholars and practitioners say about our theoretical framework
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
                      {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
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
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Apply Sacred Music Theory
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Experience how these theoretical principles come to life in our productions. 
            Submit your kalam or join our community to participate in sacred musical collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=writer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Music className="w-5 h-5" />
              <span>Submit Your Kalam</span>
            </Link>
            <Link
              href="/studio"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Headphones className="w-5 h-5" />
              <span>Visit Our Studio</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Play className="w-5 h-5" />
              <span>Hear Examples</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SufiMusicTheory;