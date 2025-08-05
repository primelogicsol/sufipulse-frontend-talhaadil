'use client'

import React, { useState } from 'react';
import { Mail, MessageSquare, Users, Building2, Globe, Send, Phone, MapPin, Clock, Heart } from 'lucide-react';

const Contact = () => {
  const [activeForm, setActiveForm] = useState('general');

  const contactTypes = [
    {
      id: 'general',
      icon: MessageSquare,
      title: 'General Inquiry',
      description: 'Questions about our mission, services, or platform'
    },
    {
      id: 'writer',
      icon: Users,
      title: 'Writer Submission',
      description: 'Submit your sacred kalam for consideration'
    },
    {
      id: 'vocalist',
      icon: Users,
      title: 'Vocalist Application',
      description: 'Join our global pool of spiritual voices'
    },
    {
      id: 'visit',
      icon: Building2,
      title: 'Studio Visit Request',
      description: 'Schedule a visit to our recording facilities'
    },
    {
      id: 'media',
      icon: Globe,
      title: 'Media & Press',
      description: 'Press inquiries and media collaboration'
    },
    {
      id: 'partnership',
      icon: Mail,
      title: 'Partnership Proposal',
      description: 'Institutional or organizational collaboration'
    }
  ];

  // Set active form based on URL parameter on component mount
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const typeFromUrl = urlParams.get('type');
    if (typeFromUrl && contactTypes.find(type => type.id === typeFromUrl)) {
      setActiveForm(typeFromUrl);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'connect@sufipulse.com',
      description: 'Primary contact for all inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-SUFI',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'SufiPulse Studio - USA',
      description: 'Dr. Kumar Foundation Campus'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Weekend by appointment'
    }
  ];

  const socialLinks = [
    { name: 'YouTube', href: '#', color: 'text-red-600 hover:text-red-700' },
    { name: 'Instagram', href: '#', color: 'text-pink-600 hover:text-pink-700' },
    { name: 'Twitter', href: '#', color: 'text-blue-600 hover:text-blue-700' },
    { name: 'LinkedIn', href: '#', color: 'text-blue-700 hover:text-blue-800' }
  ];

  const renderForm = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const typeFromUrl = urlParams.get('type');
    const currentType = typeFromUrl || activeForm;
    
    switch (currentType) {
      case 'writer':
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="City, Country"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Primary Language *</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                  <option>Urdu</option>
                  <option>English</option>
                  <option>Arabic</option>
                  <option>Persian</option>
                  <option>Turkish</option>
                  <option>Kashmiri</option>
                  <option>Other</option>
                </select>
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Kalam Title</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Title of your sacred poetry"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Kalam *</label>
              <textarea
                rows={8}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Share your sacred poetry here..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Brief Description</label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Tell us about the inspiration or meaning behind your kalam..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Musical Treatment</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="musicType" value="qawwali" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Qawwali</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="musicType" value="chant" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Chant</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="musicType" value="anthem" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Anthem</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="musicType" value="open" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Open to Direction</span>
                </label>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h4 className="font-medium text-emerald-800 mb-2">Digital Niyaz (Sacred Intention)</h4>
              <p className="text-sm text-emerald-700 mb-3">
                By submitting this kalam, I offer it with sincere spiritual intention for the benefit of the global ummah, 
                understanding that SufiPulse is a non-commercial platform dedicated to serving the sacred.
              </p>
              <label className="flex items-center space-x-2">
                <input type="checkbox" required className="rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500" />
                <span className="text-sm text-emerald-800">I understand and accept this sacred commitment *</span>
              </label>
            </div>
          </form>
        );

      case 'visit':
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Organization/Affiliation</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Your organization or spiritual community"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Visit Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Purpose of Visit *</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>Studio Tour</option>
                <option>Recording Session</option>
                <option>Educational Visit</option>
                <option>Spiritual Pilgrimage</option>
                <option>Media Documentation</option>
                <option>Academic Research</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Number of Visitors</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>1 person</option>
                <option>2-5 people</option>
                <option>6-10 people</option>
                <option>11-20 people</option>
                <option>More than 20 people</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Please share any specific interests, requirements, or questions about your visit..."
              ></textarea>
            </div>
          </form>
        );

      case 'partnership':
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Organization Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Name of your organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Role/Title *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Your position in the organization"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type *</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>Spiritual/Religious Organization</option>
                <option>Educational Institution</option>
                <option>Cultural Center</option>
                <option>Music/Arts Organization</option>
                <option>Research Institution</option>
                <option>Media Company</option>
                <option>Non-Profit Foundation</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Type *</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>Content Collaboration</option>
                <option>Educational Partnership</option>
                <option>Cultural Exchange</option>
                <option>Research Collaboration</option>
                <option>Distribution Partnership</option>
                <option>Spiritual Community Alliance</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Proposal *</label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Please describe your partnership proposal, goals, and how it aligns with SufiPulse's mission..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Organization Website/Social Media</label>
              <input
                type="url"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="https://your-organization.com"
              />
            </div>
          </form>
        );

      case 'media':
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Media Organization *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Name of your media organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Role *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="e.g., Journalist, Producer, Editor"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Media Type *</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>Print Media</option>
                <option>Online Publication</option>
                <option>Television</option>
                <option>Radio</option>
                <option>Podcast</option>
                <option>Documentary</option>
                <option>Academic Journal</option>
                <option>Blog/Website</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Inquiry Type *</label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                <option>Interview Request</option>
                <option>Feature Story</option>
                <option>Press Release</option>
                <option>Documentary Collaboration</option>
                <option>Background Information</option>
                <option>Photo/Video Request</option>
                <option>Expert Commentary</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Deadline</label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Media Inquiry Details *</label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Please describe your media inquiry, story angle, specific questions, or collaboration proposal..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Publication/Platform Website</label>
              <input
                type="url"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="https://your-publication.com"
              />
            </div>
          </form>
        );
      case 'vocalist':
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="City, Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Vocal Range *</label>
                <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200">
                  <option>Soprano</option>
                  <option>Mezzo-Soprano</option>
                  <option>Alto</option>
                  <option>Tenor</option>
                  <option>Baritone</option>
                  <option>Bass</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Languages You Perform In *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="e.g., Arabic, Urdu, English, Turkish, Kashmiri"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Vocal Specialties</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="e.g., Qawwali, Sufi Chants, Spiritual Ballads"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Experience & Background</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Tell us about your vocal journey and spiritual practice..."
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
              <div className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input type="radio" name="availability" value="available" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Available for immediate collaborations</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="availability" value="limited" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Limited availability</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="availability" value="future" className="text-emerald-600 focus:ring-emerald-500" />
                  <span className="text-sm">Interested in future projects</span>
                </label>
              </div>
            </div>
          </form>
        );

      default:
        return (
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Enter your full name"
                />
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
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="What is your inquiry about?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
              <textarea
                rows={6}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                placeholder="Please share your message, questions, or how we can assist you..."
              ></textarea>
            </div>

          </form>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Connect With Our
              <span className="block text-emerald-400">Sacred Community</span>
            </h1>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Ready to share your divine Sufi kalam or collaborate with our global spiritual community? 
                From Kashmir's mystical valleys to the world — we'd love to hear from you.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Every connection is a bridge between hearts seeking the Divine"
              </blockquote>
              <p className="text-slate-300">
                Choose your path of collaboration and let's amplify sacred voices together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-slate-800 font-medium mb-1">{info.details}</p>
                <p className="text-sm text-slate-600">{info.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Types */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">How Can We Help?</h2>
            <div className="space-y-3">
              {contactTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    onClick={() => setActiveForm(type.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${
                      activeForm === type.id
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <Icon className={`w-5 h-5 mt-1 ${
                        activeForm === type.id ? 'text-emerald-600' : 'text-slate-500'
                      }`} />
                      <div>
                        <h3 className="font-semibold mb-1">{type.title}</h3>
                        <p className="text-sm opacity-70">{type.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="font-bold text-slate-800 mb-4">Follow Our Journey</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`flex items-center justify-center py-3 px-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors duration-200 ${social.color}`}
                  >
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <div className="mb-6">
                {(() => {
                  const urlParams = new URLSearchParams(window.location.search);
                  const typeFromUrl = urlParams.get('type');
                  const currentType = typeFromUrl || activeForm;
                  const currentContactType = contactTypes.find(type => type.id === currentType);
                  return (
                    <>
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        {currentContactType?.title || 'Contact Us'}
                      </h2>
                      <p className="text-slate-600">
                        {currentContactType?.description || 'How can we help you today?'}
                      </p>
                    </>
                  );
                })()}
              </div>

              {renderForm()}

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Reminder */}
        <div className="mt-20 text-center">
          <div className="bg-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Sacred Promise to Writers</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-6">
              Submit your kalam and we handle everything else—musical direction, vocalist selection, professional recording, 
              and global distribution. Your sacred words deserve world-class treatment, and we provide it completely free 
              while ensuring your authorship is always honored.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-emerald-400 mb-2">100% Free</h4>
                <p className="text-sm text-slate-300">Complete production services at no cost</p>
              </div>
              <div className="bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-emerald-400 mb-2">Global Reach</h4>
                <p className="text-sm text-slate-300">Your kalam shared worldwide</p>
              </div>
              <div className="bg-slate-700 rounded-xl p-4">
                <h4 className="font-bold text-emerald-400 mb-2">Full Credit</h4>
                <p className="text-sm text-slate-300">Your authorship always honored</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;