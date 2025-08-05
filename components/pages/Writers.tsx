'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { PenTool, MapPin, Languages, BookOpen, Star, Plus, Filter, Award, Globe, Heart, Users, ArrowRight } from 'lucide-react';


const Writers = () => {
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Writers', count: 89 },
    { id: 'urdu', label: 'Urdu', count: 34 },
    { id: 'english', label: 'English', count: 28 },
    { id: 'arabic', label: 'Arabic', count: 18 },
    { id: 'multilingual', label: 'Multilingual', count: 15 }
  ];

  const writers = [
    {
      id: 1,
      name: "Amina Rahman",
      location: "Karachi, Pakistan",
      languages: ["Urdu", "English"],
      speciality: "Classical Urdu Poetry",
      sufOrder: "Chishti",
      bio: "A contemporary voice in classical Urdu poetry, weaving traditional Sufi themes with modern spiritual insights and divine wisdom.",
      kalams: 12,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Ishq-e-Haqiqi", "Wahdat", "Tawbah", "Divine Unity"],
      featured: true,
      recentWork: "Ishq-e-Haqiqi",
      joinedDate: "2023"
    },
    {
      id: 2,
      name: "Dr. Sarah Ahmed",
      location: "London, UK",
      languages: ["English", "Urdu"],
      speciality: "Contemporary Spiritual Poetry",
      sufOrder: "Naqshbandi",
      bio: "Academic and poet exploring the intersection of modern spirituality and traditional Sufi wisdom.",
      kalams: 8,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Climate Spirituality", "Unity", "Modern Mysticism", "Sacred Ecology"],
      featured: true,
      recentWork: "Wahdat Symphony",
      joinedDate: "2023"
    },
    {
      id: 3,
      name: "Ahmad Hassan",
      location: "Damascus, Syria",
      languages: ["Arabic", "English", "Turkish"],
      speciality: "Multilingual Mystical Verses",
      sufOrder: "Mevlevi",
      bio: "Master of multilingual expression, creating bridges between cultures through sacred poetry.",
      kalams: 15,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Fanaa", "Whirling Mysticism", "Cross-cultural Unity", "Sacred Dance"],
      featured: true,
      recentWork: "Path of Fanaa",
      joinedDate: "2022"
    },
    {
      id: 4,
      name: "Maryam Ali",
      location: "Istanbul, Turkey",
      languages: ["Turkish", "Arabic", "Persian"],
      speciality: "Traditional Dhikr Poetry",
      sufOrder: "Qadiriyya",
      bio: "Keeper of traditional dhikr poetry, preserving ancient forms while breathing new life into them.",
      kalams: 10,
      rating: 4.7,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Dhikr", "Traditional Forms", "Sacred Remembrance", "Ancient Wisdom"],
      recentWork: "Zikr of the Heart",
      joinedDate: "2023"
    },
    {
      id: 5,
      name: "Dr. Khalil Ibrahim",
      location: "Cairo, Egypt",
      languages: ["Arabic", "English"],
      speciality: "Environmental Mysticism",
      sufOrder: "Shadhili",
      bio: "Pioneer in environmental spirituality, connecting ecological consciousness with Sufi wisdom.",
      kalams: 6,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Climate Spirituality", "Nature Mysticism", "Environmental Ethics", "Earth Stewardship"],
      recentWork: "Climate Awakening",
      joinedDate: "2024"
    },
    {
      id: 6,
      name: "Hassan Al-Maghribi",
      location: "Fez, Morocco",
      languages: ["Arabic", "French", "Berber"],
      speciality: "North African Sufi Traditions",
      sufOrder: "Tijaniyya",
      bio: "Chronicler of North African Sufi traditions, preserving and revitalizing Maghrebi mystical poetry.",
      kalams: 9,
      rating: 4.6,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Maghrebi Traditions", "Cultural Heritage", "Ancestral Wisdom", "Desert Mysticism"],
      recentWork: "Tawbah Gardens",
      joinedDate: "2023"
    },
    {
      id: 7,
      name: "Zara Mir",
      location: "Srinagar, Kashmir",
      languages: ["Kashmiri", "Urdu", "English"],
      speciality: "Kashmiri Mystical Heritage",
      sufOrder: "Rishiyya",
      bio: "Preserving and modernizing the rich mystical poetry tradition of Kashmir's sacred valleys.",
      kalams: 7,
      rating: 4.9,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Kashmiri Heritage", "Valley Mysticism", "Cultural Preservation", "Sacred Geography"],
      recentWork: "Kashmir's Call",
      joinedDate: "2024"
    },
    {
      id: 8,
      name: "Imam Rashid",
      location: "Medina, Saudi Arabia",
      languages: ["Arabic", "Urdu"],
      speciality: "Classical Islamic Poetry",
      sufOrder: "Qadiriyya",
      bio: "Scholar and poet specializing in classical Islamic spiritual poetry with deep theological insight.",
      kalams: 11,
      rating: 4.8,
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200",
      themes: ["Classical Spirituality", "Theological Poetry", "Sacred Tradition", "Divine Wisdom"],
      recentWork: "Silent Dhikr",
      joinedDate: "2022"
    }
  ];

  const filteredWriters = writers.filter(writer => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'multilingual') return writer.languages.length > 2;
    return writer.languages.some(lang => lang.toLowerCase() === activeFilter);
  });

  const featuredWriters = writers.filter(writer => writer.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PenTool className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Sufi Writer
              <span className="block text-emerald-400">Universe</span>
            </h1>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Meet the sacred voices from around the world who craft divine kalam, with special 
                reverence for the mystical tradition of Kashmiri Sufism and global spiritual expression.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Every writer carries a piece of the Divine, every kalam a bridge to the sacred"
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowSubmissionForm(true)}
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Plus className="w-5 h-5" />
                  <span>Submit Your Kalam</span>
                </button>
                <Link
                  href="/how-it-works"

                  className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>How It Works</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">89</div>
              <div className="text-slate-600 font-medium">Active Writers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">25+</div>
              <div className="text-slate-600 font-medium">Languages</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">300+</div>
              <div className="text-slate-600 font-medium">Kalam Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Free Service</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Featured Writers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
            <Award className="w-6 h-6 text-emerald-600 mr-2" />
            Featured Writers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWriters.map((writer) => (
              <div key={writer.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 border border-emerald-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      <img
                        src={writer.image}
                        alt={writer.name}
                        className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-100"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{writer.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-slate-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{writer.location}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-emerald-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{writer.rating}</span>
                        <span className="text-slate-500">•</span>
                        <span className="text-slate-500">{writer.kalams} Kalams</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {writer.speciality}
                    </span>
                    <span className="text-xs text-slate-500 ml-2">{writer.sufOrder}</span>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {writer.bio}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-medium text-slate-700 mb-2">Recent Work:</div>
                    <div className="text-sm font-medium text-emerald-600">{writer.recentWork}</div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {writer.themes.slice(0, 3).map((theme, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium transition-all duration-200">
                    View Profile & Works
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800">Browse All Writers</h3>
            <div className="text-sm text-slate-600">
              {filteredWriters.length} of {writers.length} writers
            </div>
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? 'bg-white/20'
                    : 'bg-slate-300'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Writers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredWriters.map((writer) => (
            <div key={writer.id} className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-5 border border-slate-100">
                <div className="flex items-start space-x-3 mb-4">
                  <img
                    src={writer.image}
                    alt={writer.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-800 mb-1 line-clamp-1">{writer.name}</h3>
                    <div className="flex items-center space-x-1 text-xs text-slate-500 mb-1">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{writer.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-emerald-600">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{writer.rating}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">{writer.kalams}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {writer.speciality}
                  </span>
                </div>

                <div className="mb-3">
                  <div className="flex items-center space-x-1 mb-2">
                    <Languages className="w-3 h-3 text-slate-500" />
                    <span className="text-xs font-medium text-slate-700">Languages</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {writer.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed line-clamp-2">
                  {writer.bio}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <BookOpen className="w-3 h-3 text-slate-500" />
                    <span className="text-xs font-medium text-slate-700">Themes</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {writer.themes.slice(0, 2).map((theme, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {theme}
                      </span>
                    ))}
                    {writer.themes.length > 2 && (
                      <span className="text-xs text-slate-500">+{writer.themes.length - 2}</span>
                    )}
                  </div>
                </div>

                <button className="w-full bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 py-2 rounded-lg font-medium transition-all duration-200 text-sm">
                  <Link href={`/writers/${writer.id}`} className="block w-full">View Profile</Link>

                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-slate-800 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Global Writer Community</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our writers represent the diversity and unity of the global Sufi tradition
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">89</div>
              <div className="text-slate-300">Active Writers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">25+</div>
              <div className="text-slate-300">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-slate-300">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">300+</div>
              <div className="text-slate-300">Kalam Created</div>
            </div>
          </div>
        </div>

        {/* Submission Form Modal */}
        {showSubmissionForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800">Submit Your Kalam</h2>
                  <button
                    onClick={() => setShowSubmissionForm(false)}
                    className="text-slate-500 hover:text-slate-700 p-2"
                  >
                    ×
                  </button>
                </div>
                <p className="text-slate-600 mt-2">Share your divine words with the global community</p>
              </div>
              
              <form className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                      placeholder="Your name or pen name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                      placeholder="City, Country"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Sufi Lineage or Influence (Optional)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., Chishti, Naqshbandi, Mevlevi, or spiritual influence"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Kalam Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Title of your kalam"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Language</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                      <option>Urdu</option>
                      <option>English</option>
                      <option>Arabic</option>
                      <option>Persian</option>
                      <option>Turkish</option>
                      <option>Kashmiri</option>
                      <option>Roman Urdu</option>
                      <option>Multilingual</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Theme</label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                      <option>Ishq-e-Haqiqi</option>
                      <option>Wahdat</option>
                      <option>Fanaa</option>
                      <option>Tawbah</option>
                      <option>Climate Spirituality</option>
                      <option>Dhikr & Remembrance</option>
                      <option>Divine Unity</option>
                      <option>Spiritual Journey</option>
                      <option>Kashmiri Heritage</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Kalam Text</label>
                  <textarea
                    rows={8}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Enter your kalam here..."
                  ></textarea>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Sacred Consent & Digital Niyaz</h4>
                  <p className="text-sm text-emerald-700">
                    I submit this kalam as an offering. I understand SufiPulse may respectfully adapt it for music and assign singers as appropriate. 
                    I grant SufiPulse a perpetual non-commercial license to produce, publish, and promote this work in sacred service. 
                    My authorship will always be honored.
                  </p>
                  <label className="flex items-center space-x-2 mt-3">
                    <input type="checkbox" required className="rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="text-sm text-emerald-800">I understand and accept this sacred commitment *</span>
                  </label>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowSubmissionForm(false)}
                    className="flex-1 py-3 px-6 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors duration-200"
                  >
                    Submit Kalam
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Writers;