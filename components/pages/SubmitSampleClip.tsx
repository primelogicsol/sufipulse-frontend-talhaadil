'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Mic, 
  User, 
  Mail, 
  MapPin, 
  Upload, 
  Music, 
  Heart,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  Globe,
  Users,
  Volume2
} from 'lucide-react';

const SubmitSampleClip = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    vocalRange: '',
    languages: '',
    experience: '',
    sampleTitle: '',
    sampleDescription: '',
    audioFile: null as File | null,
    portfolio: '',
    availability: '',
    acceptTerms: false
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, audioFile: file }));
    
    if (errors.audioFile) {
      setErrors(prev => ({ ...prev, audioFile: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.vocalRange) newErrors.vocalRange = 'Vocal range is required';
    if (!formData.languages.trim()) newErrors.languages = 'Languages are required';
    if (!formData.sampleTitle.trim()) newErrors.sampleTitle = 'Sample title is required';
    if (!formData.audioFile) newErrors.audioFile = 'Audio sample is required';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors below');
      return;
    }

    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success('Your vocal sample has been submitted successfully! We will review it and get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        location: '',
        vocalRange: '',
        languages: '',
        experience: '',
        sampleTitle: '',
        sampleDescription: '',
        audioFile: null,
        portfolio: '',
        availability: '',
        acceptTerms: false
      });
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: "43", label: "Active Vocalists", icon: Mic },
    { number: "15+", label: "Languages", icon: Globe },
    { number: "200+", label: "Sample Reviews", icon: Music },
    { number: "100%", label: "Free Evaluation", icon: Award }
  ];

  const vocalRanges = [
    'Soprano',
    'Mezzo-Soprano', 
    'Alto',
    'Tenor',
    'Baritone',
    'Bass'
  ];

  const sampleGuidelines = [
    {
      title: "Audio Quality",
      description: "Clear recording with minimal background noise",
      icon: Volume2
    },
    {
      title: "Duration",
      description: "30 seconds to 2 minutes of your best vocal work",
      icon: Music
    },
    {
      title: "Content",
      description: "Sacred or spiritual content preferred, but not required",
      icon: Heart
    },
    {
      title: "Format",
      description: "MP3, WAV, or M4A files accepted",
      icon: Upload
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Upload className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Submit Your
              <span className="block text-emerald-400">Sample Clip</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto"
            >
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Share your vocal talent with our team. Submit a sample clip to be considered 
                for our global pool of sacred vocalists and spiritual collaborators.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Every voice has the potential to touch hearts across continents"
              </blockquote>
              <p className="text-slate-300">
                Professional evaluation and feedback provided for all submissions.
              </p>
            </motion.div>
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

      {/* Sample Guidelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Sample Submission Guidelines
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow these guidelines to ensure your vocal sample receives the best evaluation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {sampleGuidelines.map((guideline, index) => {
              const Icon = guideline.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">{guideline.title}</h3>
                  <p className="text-sm text-slate-600">{guideline.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Submit Your Vocal Sample
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Share your voice and join our global community of sacred vocalists
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.fullName && <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="City, Country"
                  required
                />
                {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location}</p>}
              </div>

              {/* Vocal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Vocal Range *</label>
                  <select
                    name="vocalRange"
                    value={formData.vocalRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Vocal Range</option>
                    {vocalRanges.map(range => (
                      <option key={range} value={range.toLowerCase()}>{range}</option>
                    ))}
                  </select>
                  {errors.vocalRange && <p className="text-sm text-red-600 mt-1">{errors.vocalRange}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Languages You Perform In *</label>
                  <input
                    type="text"
                    name="languages"
                    value={formData.languages}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., Arabic, Urdu, English, Turkish"
                    required
                  />
                  {errors.languages && <p className="text-sm text-red-600 mt-1">{errors.languages}</p>}
                </div>
              </div>

              {/* Sample Information */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sample Title *</label>
                <input
                  type="text"
                  name="sampleTitle"
                  value={formData.sampleTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Title of your vocal sample"
                  required
                />
                {errors.sampleTitle && <p className="text-sm text-red-600 mt-1">{errors.sampleTitle}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Audio Sample *</label>
                <input
                  type="file"
                  name="audioFile"
                  onChange={handleFileChange}
                  accept="audio/*"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  required
                />
                <p className="text-xs text-slate-500 mt-1">
                  Upload MP3, WAV, or M4A files (max 10MB). Duration: 30 seconds to 2 minutes.
                </p>
                {errors.audioFile && <p className="text-sm text-red-600 mt-1">{errors.audioFile}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sample Description</label>
                <textarea
                  name="sampleDescription"
                  value={formData.sampleDescription}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Describe your sample - what you're singing, the style, any special techniques..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Experience & Background</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Tell us about your vocal training, performance experience, and spiritual connection to music..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Portfolio/Previous Work</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="https://your-portfolio.com or SoundCloud link"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  >
                    <option value="">Select Availability</option>
                    <option value="immediate">Available for immediate projects</option>
                    <option value="limited">Limited availability</option>
                    <option value="future">Interested in future opportunities</option>
                    <option value="seasonal">Seasonal availability</option>
                  </select>
                </div>
              </div>

              {/* Sacred Commitment */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-medium text-emerald-800 mb-2">Sacred Commitment</h4>
                <p className="text-sm text-emerald-700 mb-4">
                  By submitting this vocal sample, I express interest in lending my voice for the sacred purpose 
                  of amplifying divine kalam with sincerity and spiritual intention. I understand this is a 
                  non-commercial spiritual service where I will receive full credit for any vocal contributions.
                </p>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500"
                    required
                  />
                  <span className="text-sm text-emerald-800">
                    I understand and accept this sacred commitment *
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-sm text-red-600 mt-1">{errors.acceptTerms}</p>}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Submit Sample Clip</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Share Your Sacred Voice
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Your vocal sample is the first step toward joining our global community of sacred vocalists. 
            We evaluate every submission with care and provide professional feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/vocalists"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Meet Our Vocalists</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Music className="w-5 h-5" />
              <span>Listen to Collaborations</span>
            </Link>
            <Link
              href="/join-vocalist-pool"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Star className="w-5 h-5" />
              <span>Full Application</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitSampleClip;