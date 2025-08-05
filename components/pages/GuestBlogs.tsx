import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  Calendar, 
  User, 
  Clock, 
  Heart, 
  Globe, 
  BookOpen, 
  Star,
  ArrowRight,
  Eye,
  MessageCircle,
  Share2,
  Filter,
  Search,
  Award,
  PenTool,
  Mic
} from 'lucide-react';

const GuestBlogs = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const guestPosts = [
    {
      id: 1,
      title: "The Sacred Art of Qawwali: Bridging Heaven and Earth",
      author: "Dr. Hassan Al-Sufi",
      role: "Islamic Scholar & Musicologist",
      location: "Cairo, Egypt",
      date: "2024-01-20",
      category: "musicology",
      readTime: "12 min read",
      excerpt: "Qawwali is not merely music—it is a spiritual technology, a divine algorithm that transforms the human heart through sacred sound...",
      content: "In the mystical tradition of Islam, few art forms possess the transformative power of Qawwali. This sacred musical expression, born in the Sufi gatherings of the Indian subcontinent, serves as a bridge between the earthly and the divine.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "4.2K",
      comments: 67,
      featured: true,
      tags: ["Qawwali", "Sacred Music", "Spirituality"]
    },
    {
      id: 2,
      title: "Poetry as Prayer: The Mystical Language of Sufi Verse",
      author: "Sister Amina Wadud",
      role: "Sufi Poet & Teacher",
      location: "Istanbul, Turkey",
      date: "2024-01-18",
      category: "poetry",
      readTime: "8 min read",
      excerpt: "When we write sacred poetry, we are not crafting words—we are opening doorways for the Divine to speak through us...",
      content: "The pen becomes a prayer tool, the page a sacred space where the human heart meets divine inspiration. In Sufi poetry, every word carries the weight of spiritual longing.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "3.1K",
      comments: 52,
      tags: ["Poetry", "Prayer", "Divine Inspiration"]
    },
    {
      id: 3,
      title: "The Science of Sacred Sound: How Dhikr Transforms Consciousness",
      author: "Prof. Maria Santos",
      role: "Neuroscientist & Spiritual Researcher",
      location: "Barcelona, Spain",
      date: "2024-01-15",
      category: "science",
      readTime: "10 min read",
      excerpt: "Modern neuroscience is beginning to understand what Sufis have known for centuries—repetitive sacred sound fundamentally alters brain states...",
      content: "Through advanced neuroimaging, we can now observe how dhikr practices create measurable changes in brain activity, particularly in areas associated with transcendence and spiritual experience.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "2.8K",
      comments: 43,
      tags: ["Neuroscience", "Dhikr", "Consciousness"]
    },
    {
      id: 4,
      title: "Kashmir's Mystical Heritage: Preserving Sacred Traditions",
      author: "Tariq Ahmad Shah",
      role: "Cultural Historian",
      location: "Srinagar, Kashmir",
      date: "2024-01-12",
      category: "heritage",
      readTime: "9 min read",
      excerpt: "The valleys of Kashmir have nurtured mystical traditions for over a millennium. Today, platforms like SufiPulse help preserve this sacred heritage...",
      content: "From the teachings of Lal Ded to the poetry of Habba Khatoon, Kashmir's mystical tradition represents one of humanity's greatest spiritual treasures. Digital preservation ensures these voices continue to inspire.",
      image: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "3.5K",
      comments: 58,
      tags: ["Kashmir", "Heritage", "Preservation"]
    },
    {
      id: 5,
      title: "Global Unity Through Sacred Music: A Vocalist's Perspective",
      author: "Fatima Al-Zahra",
      role: "International Vocalist",
      location: "Fez, Morocco",
      date: "2024-01-10",
      category: "collaboration",
      readTime: "7 min read",
      excerpt: "Singing kalam from writers across the globe has taught me that divine love speaks the same language in every culture...",
      content: "When I lend my voice to sacred poetry from different cultures, I discover the universal nature of spiritual longing. Each collaboration becomes a bridge between hearts.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      views: "2.6K",
      comments: 39,
      tags: ["Collaboration", "Unity", "Global Music"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: 15 },
    { id: 'musicology', label: 'Sacred Musicology', count: 4 },
    { id: 'poetry', label: 'Spiritual Poetry', count: 3 },
    { id: 'science', label: 'Spiritual Science', count: 3 },
    { id: 'heritage', label: 'Cultural Heritage', count: 2 },
    { id: 'collaboration', label: 'Global Collaboration', count: 3 }
  ];

  const stats = [
    { number: "15", label: "Guest Contributors", icon: Users },
    { number: "25", label: "Published Articles", icon: BookOpen },
    { number: "12", label: "Countries Represented", icon: Globe },
    { number: "18K+", label: "Total Reads", icon: Eye }
  ];

  const filteredPosts = guestPosts.filter(post => {
    const matchesFilter = activeFilter === 'all' || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredPost = guestPosts.find(post => post.featured);

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
                  Guest
                  <span className="block text-emerald-400">Blogs</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Voices from our global spiritual community sharing insights on sacred music, 
                  mystical poetry, and the divine art of collaboration.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                <p className="text-emerald-300 font-medium mb-2">Community Wisdom</p>
                <blockquote className="text-lg italic">
                  "Every guest voice adds a new dimension to our understanding of the sacred"
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?type=guest-blog"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <PenTool className="w-5 h-5" />
                  <span>Submit Guest Post</span>
                </Link>
                <Link
                  href="/writers"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <Users className="w-5 h-5" />
                  <span>Meet Our Writers</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Guest Blogs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-emerald-600/90 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                    <Users className="w-8 h-8 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Global Spiritual Voices</h3>
                  <p className="text-slate-200 text-sm">Insights from scholars, artists, and practitioners worldwide</p>
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

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                Featured Guest Article
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A profound exploration from one of our distinguished guest contributors
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-slate-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{featuredPost.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{featuredPost.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{featuredPost.views} views</span>
                      <span>{featuredPost.comments} comments</span>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                      Read Full Article
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-100">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search guest articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${
                      activeFilter === category.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'
                    }`}
                  >
                    <span>{category.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeFilter === category.id
                        ? 'bg-white/20'
                        : 'bg-slate-300'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredPosts.length} of {guestPosts.length} articles
            </div>
          </div>

          {/* Guest Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="text-xs font-medium text-white bg-emerald-600 px-2 py-1 rounded-lg">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1 text-white text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 mb-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="text-xs text-slate-500 mb-3">{post.role} • {post.location}</div>
                  <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Share Your Spiritual Insights
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join our community of guest contributors. Share your knowledge, experiences, 
            and insights about sacred music, spiritual poetry, and mystical traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=guest-blog"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <PenTool className="w-5 h-5" />
              <span>Submit Guest Post</span>
            </Link>
            <Link
              href="/writers"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span>Join Writers Community</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestBlogs;