'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Calendar, 
  User, 
  Globe, 
  Tag, 
  Download, 
  Share2, 
  Play,
  ArrowRight,
  Heart,
  Eye,
  CheckCircle,
  Users,
  Award
} from 'lucide-react';
import { getPostedKalams } from '@/services/requests';

const KalamLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [kalams, setKalams] = useState([]);
  const [skip, setSkip] = useState(0);
  const [limit,setLimit] = useState(4);
  const [hasMore, setHasMore] = useState(true);

  const filters = [
    { id: 'all', label: 'All Kalam', count: 300 },
    { id: 'urdu', label: 'Urdu', count: 125 },
    { id: 'english', label: 'English', count: 89 },
    { id: 'arabic', label: 'Arabic', count: 67 },
    { id: 'multilingual', label: 'Multilingual', count: 19 }
  ];

  const themes = [
    'Ishq-e-Haqiqi', 'Wahdat', 'Fanaa', 'Tawbah', 'Dhikr', 'Unity', 'Divine Love', 'Spiritual Journey'
  ];

  const testimonials = [
    {
      name: "Dr. Hassan Al-Sufi",
      location: "Cairo, Egypt",
      role: "Islamic Scholar",
      quote: "The Kalam Library preserves the sacred tradition while making it accessible to the global ummah. A treasure trove of spiritual wisdom.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Sister Fatima",
      location: "Istanbul, Turkey",
      role: "Spiritual Teacher",
      quote: "Having access to authentic Sufi poetry in multiple languages helps me guide my students on their spiritual journey.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Brother Khalil",
      location: "Fez, Morocco",
      role: "Sufi Practitioner",
      quote: "The library connects me with the global Sufi community. Reading kalam from different cultures enriches my understanding.",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  const stats = [
    { number: "300+", label: "Sacred Texts", icon: BookOpen },
    { number: "25+", label: "Languages", icon: Globe },
    { number: "89", label: "Contributing Writers", icon: Users },
    { number: "127K+", label: "Total Downloads", icon: Download }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' },
    { value: 'writer', label: 'Writer A-Z' }
  ];

  const fetchKalams = async (skipValue: number) => {
    try {
      const response = await getPostedKalams(skipValue, limit); // ✅ using API function
      const newKalams = response.data;
  
      console.log("response is hereeeee", newKalams);
  
      setKalams((prev) =>
        skipValue === 0 ? newKalams : [...prev, ...newKalams]
      );
  
      setHasMore(newKalams.length === limit);
    } catch (error) {
      console.error("Error fetching kalams:", error);
    }
  };
  
  useEffect(() => {
    fetchKalams(0); // initial fetch
  }, []);
  

  const handleLoadMore = () => {
    const newSkip = skip + limit;
    setSkip(newSkip);
    fetchKalams(newSkip);
  };

  const filteredKalam = kalams.filter(kalam => {
    const matchesFilter = activeFilter === 'all' || 
                         kalam.language.toLowerCase().includes(activeFilter) ||
                         (activeFilter === 'multilingual' && kalam.language.includes('-'));
    const matchesSearch = kalam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kalam.writer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kalam.theme.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kalam.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
                  Sacred Kalam
                  <span className="block text-emerald-400">Library</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Explore our comprehensive archive of divine poetry from writers around the world. 
                  A living repository of sacred wisdom in 25+ languages.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                <p className="text-emerald-300 font-medium mb-2">Sacred Archive</p>
                <blockquote className="text-lg italic">
                  "Every kalam a doorway to the Divine, every word a step toward truth"
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Play className="w-5 h-5" />
                  <span>Listen to Kalam</span>
                </Link>
                {/* <Link
                  href="/writers"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <Users className="w-5 h-5" />
                  <span>Meet Writers</span>
                </Link> */}
                <Link
                  href="/writer/submit"
                  className="inline-flex items-center justify-center space-x-2 border-2 border-white/30 hover:border-emerald-400 text-white hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Submit Kalam</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sacred Library"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-emerald-600/90 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                    <BookOpen className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Global Sacred Archive</h3>
                  <p className="text-slate-200 text-sm">300+ divine texts from writers worldwide</p>
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

      {/* Featured Kalam */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Featured Sacred Texts
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover the most beloved kalam from our global archive of divine poetry
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredKalam.map((kalam) => (
              <div key={kalam.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{kalam.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{kalam.writer_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Globe className="w-4 h-4" />
                          <span>{kalam.language}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(kalam.published_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        {kalam.theme}
                      </span>
                      <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
                        {kalam.musical_preference}
                      </span>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium text-slate-700">Excerpt</span>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">{kalam.kalam_text}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{kalam.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                    <div className="flex items-center space-x-4">
      
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="capitalize">Published</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <a
                      href={kalam.youtube_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-200"
                    >
                      <Play className="w-4 h-4" />
                      <span>Listen</span>
                    </a>
                    <div className="flex space-x-2">
                      {/* <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors duration-200">
                        <Download className="w-4 h-4" />
                      </button> */}
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
              >
                Load More Kalam
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Library Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Library Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Advanced tools to explore and discover sacred poetry from our global community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Advanced Search</h3>
              <p className="text-slate-600 leading-relaxed">
                Search by title, writer, theme, language, or content to find exactly what speaks to your soul
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Filter className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Smart Filtering</h3>
              <p className="text-slate-600 leading-relaxed">
                Filter by language, theme, format, or date to discover kalam that matches your spiritual journey
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Download className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Free Access</h3>
              <p className="text-slate-600 leading-relaxed">
                Download, share, and enjoy all kalam completely free as part of our sacred service
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <span>Explore Full Library</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Library Impact
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How our sacred archive serves the global spiritual community
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

      {/* Mission Statement */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
              Sacred Archive Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl lg:text-3xl font-light italic text-slate-700 leading-relaxed mb-8">
                "Preserving divine wisdom for future generations while making it accessible to today's seekers."
              </blockquote>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our Kalam Library serves as a living repository of sacred Sufi poetry, preserving the spiritual 
                wisdom of our global community while making it freely accessible to seekers worldwide. Each text 
                represents a bridge between the human heart and the Divine, carefully curated and lovingly shared.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Preservation</h3>
                  <p className="text-sm text-slate-600">Safeguarding sacred poetry for future generations</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Accessibility</h3>
                  <p className="text-sm text-slate-600">Free access to divine wisdom for all seekers</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">Global Unity</h3>
                  <p className="text-sm text-slate-600">Connecting hearts across cultures through sacred words</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Explore Sacred Wisdom?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Dive into our comprehensive archive of divine poetry. Discover kalam that speaks to your soul, 
            download texts for personal reflection, or contribute your own sacred words to our global library.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>Browse Library</span>
            </Link>
            <Link
              href="/contact?type=writer"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span>Submit Kalam</span>
            </Link>
            <Link
              href="/writers"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Award className="w-5 h-5" />
              <span>Meet Writers</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KalamLibrary;