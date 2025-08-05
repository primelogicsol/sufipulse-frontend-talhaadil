'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { 
  Wifi, 
  User, 
  Mail, 
  MapPin, 
  Mic, 
  Headphones, 
  Globe,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  Heart,
  Users,
  Music,
  Clock
} from 'lucide-react';

const RemoteRecording = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    location: '',
    country: '',
    timezone: '',
    role: '',
    projectType: '',
    equipment: '',
    internetSpeed: '',
    experience: '',
    availability: '',
    preferredSoftware: '',
    technicalSetup: '',
    additionalDetails: ''
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
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.role) newErrors.role = 'Role is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';

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
      toast.success('Your remote recording request has been submitted successfully! Our team will contact you soon to coordinate the session.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        location: '',
        country: '',
        timezone: '',
        role: '',
        projectType: '',
        equipment: '',
        internetSpeed: '',
        experience: '',
        availability: '',
        preferredSoftware: '',
        technicalSetup: '',
        additionalDetails: ''
      });
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "200+", label: "Remote Sessions", icon: Wifi },
    { number: "25+", label: "Languages Recorded", icon: Users },
    { number: "100%", label: "Professional Quality", icon: Award }
  ];

  const projectTypes = [
    'Kalam Recording (Writer)',
    'Vocal Performance (Vocalist)',
    'Instrumental Contribution',
    'Collaborative Project',
    'Sample Submission',
    'Audition Recording',
    'Other'
  ];

  const timezones = [
    'UTC-12 (Baker Island)',
    'UTC-11 (American Samoa)',
    'UTC-10 (Hawaii)',
    'UTC-9 (Alaska)',
    'UTC-8 (Pacific Time)',
    'UTC-7 (Mountain Time)',
    'UTC-6 (Central Time)',
    'UTC-5 (Eastern Time)',
    'UTC-4 (Atlantic Time)',
    'UTC-3 (Argentina)',
    'UTC-2 (South Georgia)',
    'UTC-1 (Azores)',
    'UTC+0 (London/Dublin)',
    'UTC+1 (Central Europe)',
    'UTC+2 (Eastern Europe)',
    'UTC+3 (Moscow/Turkey)',
    'UTC+4 (Gulf States)',
    'UTC+5 (Pakistan)',
    'UTC+5:30 (India)',
    'UTC+6 (Bangladesh)',
    'UTC+7 (Thailand)',
    'UTC+8 (China/Malaysia)',
    'UTC+9 (Japan/Korea)',
    'UTC+10 (Australia East)',
    'UTC+11 (Solomon Islands)',
    'UTC+12 (New Zealand)'
  ];

  const softwareOptions = [
    'Logic Pro X',
    'Pro Tools',
    'Ableton Live',
    'Reaper',
    'GarageBand',
    'Audacity',
    'Studio One',
    'Cubase',
    'FL Studio',
    'Other'
  ];

  const remoteFeatures = [
    {
      icon: Wifi,
      title: "Global Connectivity",
      description: "Connect with our studio team from anywhere in the world",
      details: "High-quality remote recording coordination"
    },
    {
      icon: Headphones,
      title: "Professional Guidance",
      description: "Our engineers guide you through the entire recording process",
      details: "Real-time technical support and direction"
    },
    {
      icon: Music,
      title: "Studio-Grade Quality",
      description: "Achieve professional results from your home setup",
      details: "Equipment recommendations and optimization"
    },
    {
      icon: Globe,
      title: "Cultural Sensitivity",
      description: "Understanding of diverse recording environments and customs",
      details: "Respectful coordination across time zones"
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
              <Wifi className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Remote Recording
              <span className="block text-emerald-400">Request</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto"
            >
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Can't visit our USA studio? No problem! Connect with our team remotely for professional 
                recording sessions from anywhere in the world. We provide technical guidance and support 
                to ensure studio-quality results from your location.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Distance cannot diminish the power of sacred collaboration"
              </blockquote>
              <p className="text-slate-300">
                Professional remote recording coordination for global spiritual collaborators.
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

      {/* Remote Recording Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Remote Recording Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional recording coordination and technical support for global collaborators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {remoteFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300">
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 mb-3">{feature.description}</p>
                  <p className="text-xs text-emerald-600 font-medium">{feature.details}</p>
                </div>
              );
            })}
          </div>

          {/* Process Overview */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Remote Recording Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-emerald-600">1</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Submit Request</h4>
                <p className="text-sm text-slate-600">Fill out technical requirements and project details</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-emerald-600">2</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Technical Setup</h4>
                <p className="text-sm text-slate-600">Our team helps optimize your recording environment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-emerald-600">3</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Guided Session</h4>
                <p className="text-sm text-slate-600">Live direction and real-time quality monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-emerald-600">4</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Professional Polish</h4>
                <p className="text-sm text-slate-600">Final mixing and mastering at our USA studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Recording Request Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Request Remote Recording Session
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with our studio team for professional remote recording coordination
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

              {/* Location Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">City/Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Your city"
                    required
                  />
                  {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Country *</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Your country"
                    required
                  />
                  {errors.country && <p className="text-sm text-red-600 mt-1">{errors.country}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Time Zone</label>
                  <select
                    name="timezone"
                    value={formData.timezone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  >
                    <option value="">Select Time Zone</option>
                    {timezones.map(tz => (
                      <option key={tz} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Role *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Your Role</option>
                    <option value="writer">Writer/Poet</option>
                    <option value="vocalist">Vocalist</option>
                    <option value="musician">Musician</option>
                    <option value="collaborator">Collaborator</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-sm text-red-600 mt-1">{errors.projectType}</p>}
                </div>
              </div>

              {/* Technical Setup */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Recording Equipment</label>
                  <input
                    type="text"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., USB microphone, audio interface, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Internet Speed</label>
                  <input
                    type="text"
                    name="internetSpeed"
                    value={formData.internetSpeed}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., 50 Mbps download, 10 Mbps upload"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Preferred Recording Software</label>
                  <select
                    name="preferredSoftware"
                    value={formData.preferredSoftware}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  >
                    <option value="">Select Software</option>
                    {softwareOptions.map(software => (
                      <option key={software} value={software}>{software}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., Weekends, evenings, flexible"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Recording Experience</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Describe your experience with recording, equipment, and software..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Technical Setup Details</label>
                <textarea
                  name="technicalSetup"
                  value={formData.technicalSetup}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Describe your recording space, acoustic treatment, equipment setup..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Share any specific requirements, questions, or details about your remote recording needs..."
                />
              </div>

              {/* Remote Recording Guidelines */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-medium text-emerald-800 mb-2">Remote Recording Guidelines</h4>
                <div className="text-sm text-emerald-700 space-y-2">
                  <p>• Stable internet connection (minimum 10 Mbps upload) required</p>
                  <p>• Quiet recording environment with minimal background noise</p>
                  <p>• Basic recording equipment (USB microphone minimum)</p>
                  <p>• Flexible scheduling to accommodate time zone differences</p>
                  <p>• Technical support provided throughout the process</p>
                  <p>• Professional mixing and mastering completed at our USA studio</p>
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
                      <Wifi className="w-5 h-5" />
                      <span>Submit Remote Recording Request</span>
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
            Connect Globally, Record Professionally
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Distance is no barrier to sacred collaboration. Our remote recording services bring 
            professional studio quality to your location, wherever you are in the world.
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
              href="/studio-visit"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Users className="w-5 h-5" />
              <span>Visit Studio in Person</span>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Star className="w-5 h-5" />
              <span>How It Works</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemoteRecording;