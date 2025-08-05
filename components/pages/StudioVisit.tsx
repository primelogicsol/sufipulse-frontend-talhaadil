'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Building2, 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Users, 
  Clock,
  CheckCircle,
  ArrowRight,
  Headphones,
  Award,
  Star,
  Globe,
  Music,
  Eye
} from 'lucide-react';

const StudioVisit = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    visitDate: '',
    visitPurpose: '',
    numberOfVisitors: '',
    additionalDetails: '',
    contactNumber: '',
    preferredTime: '',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
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
    if (!formData.visitDate) newErrors.visitDate = 'Visit date is required';
    if (!formData.visitPurpose) newErrors.visitPurpose = 'Visit purpose is required';
    if (!formData.numberOfVisitors) newErrors.numberOfVisitors = 'Number of visitors is required';

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
      toast.success('Your studio visit request has been submitted successfully! We will contact you soon to confirm details.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        visitDate: '',
        visitPurpose: '',
        numberOfVisitors: '',
        additionalDetails: '',
        contactNumber: '',
        preferredTime: '',
        specialRequests: ''
      });
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: "300+", label: "Recordings Made", icon: Music },
    { number: "50+", label: "Countries Visited", icon: Globe },
    { number: "25+", label: "Languages Recorded", icon: Users },
    { number: "100%", label: "Sacred Focus", icon: Award }
  ];

  const visitPurposes = [
    'Studio Tour',
    'Recording Session',
    'Educational Visit',
    'Spiritual Pilgrimage',
    'Media Documentation',
    'Academic Research',
    'Cultural Exchange',
    'Partnership Meeting',
    'Other'
  ];

  const timeSlots = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (1:00 PM - 4:00 PM)',
    'Evening (5:00 PM - 8:00 PM)',
    'Flexible'
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
              <Building2 className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Visit SufiPulse
              <span className="block text-emerald-400">Studio</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto"
            >
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Experience where sacred meets technical excellence. Visit our world-class recording facilities 
                and witness the creation of divine collaborations firsthand.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Every sacred recording begins with intention and ends with global inspiration"
              </blockquote>
              <p className="text-slate-300">
                Schedule your visit to SufiPulse Studio – USA and be part of our sacred mission.
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

      {/* Studio Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">SufiPulse Studio – USA</h2>
              <p className="text-slate-600 leading-relaxed">
                Our state-of-the-art recording facility is designed specifically for sacred music production. 
                Every element, from acoustic treatment to equipment selection, serves the purpose of capturing 
                and enhancing the spiritual essence of divine kalam.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <Headphones className="w-8 h-8 text-emerald-600 mb-2" />
                  <h3 className="font-bold text-slate-800 mb-1">Professional Equipment</h3>
                  <p className="text-sm text-slate-600">World-class recording and production gear</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <Music className="w-8 h-8 text-slate-600 mb-2" />
                  <h3 className="font-bold text-slate-800 mb-1">Sacred Acoustics</h3>
                  <p className="text-sm text-slate-600">Specially designed for spiritual music</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SufiPulse Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Sacred Recording Space</h3>
                  <p className="text-slate-200 text-sm">Where divine words meet technical excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Request Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Request Your Studio Visit
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Schedule a visit to experience our sacred recording environment and meet our team
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization/Affiliation</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Your organization or spiritual community"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Visit Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Visit Date *</label>
                  <input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  />
                  {errors.visitDate && <p className="text-sm text-red-600 mt-1">{errors.visitDate}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  >
                    <option value="">Select Time Preference</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Purpose of Visit *</label>
                  <select
                    name="visitPurpose"
                    value={formData.visitPurpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Purpose</option>
                    {visitPurposes.map(purpose => (
                      <option key={purpose} value={purpose.toLowerCase()}>{purpose}</option>
                    ))}
                  </select>
                  {errors.visitPurpose && <p className="text-sm text-red-600 mt-1">{errors.visitPurpose}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Number of Visitors *</label>
                  <select
                    name="numberOfVisitors"
                    value={formData.numberOfVisitors}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Number</option>
                    <option value="1">1 person</option>
                    <option value="2-5">2-5 people</option>
                    <option value="6-10">6-10 people</option>
                    <option value="11-20">11-20 people</option>
                    <option value="20+">More than 20 people</option>
                  </select>
                  {errors.numberOfVisitors && <p className="text-sm text-red-600 mt-1">{errors.numberOfVisitors}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Please share any specific interests, requirements, or questions about your visit..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Any special accommodations, accessibility needs, or specific areas of interest..."
                />
              </div>

              {/* Visit Guidelines */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-medium text-emerald-800 mb-2">Visit Guidelines</h4>
                <div className="text-sm text-emerald-700 space-y-2">
                  <p>• Studio visits are scheduled during business hours (Mon-Fri, 9AM-6PM EST)</p>
                  <p>• Please arrive 15 minutes early for check-in and orientation</p>
                  <p>• Photography and recording may be permitted with prior approval</p>
                  <p>• Respectful attire and behavior expected in our sacred space</p>
                  <p>• Group visits may require additional coordination time</p>
                </div>
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
                      <Building2 className="w-5 h-5" />
                      <span>Request Studio Visit</span>
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
            Experience Sacred Sound Creation
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Visit our studio and witness where divine poetry transforms into global spiritual inspiration. 
            See our equipment, meet our team, and understand our sacred production process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/studio"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Headphones className="w-5 h-5" />
              <span>Learn About Our Studio</span>
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Eye className="w-5 h-5" />
              <span>See Our Productions</span>
            </Link>
            <Link
              href="/studio-diaries"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Star className="w-5 h-5" />
              <span>Studio Diaries</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioVisit;