'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  User, 
  Mail, 
  Building, 
  Globe, 
  Users, 
  BookOpen,
  CheckCircle,
  ArrowRight,
  Award,
  Star,
  Heart,
  Target
} from 'lucide-react';
import { createPartnershipProposal } from '@/services/requests';
import { useToast } from '@/context/ToastContext';
import { incrementDaily,incrementMonthly,incrementWeekly } from '@/lib/increment';

const Partnership = () => {
  const {showToast} = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organizationName: '',
    role: '',
    organizationType: '',
    partnershipType: '',
    proposal: '',
    website: '',
    timeline: '',
    resources: '',
    goals: '',
    sacredAlignment: true, // Added to match API requirement
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
    if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData.role.trim()) newErrors.role = 'Your role is required';
    if (!formData.organizationType) newErrors.organizationType = 'Organization type is required';
    if (!formData.partnershipType) newErrors.partnershipType = 'Partnership type is required';
    if (!formData.proposal.trim()) newErrors.proposal = 'Partnership proposal is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      showToast('Please fix the errors below');
      return;
    }

    setLoading(true);
    
    try {
      // Map formData to API payload
      const apiPayload = {
        full_name: formData.fullName,
        email: formData.email,
        organization_name: formData.organizationName,
        role_title: formData.role,
        organization_type: formData.organizationType,
        partnership_type: formData.partnershipType,
        website: formData.website,
        proposal_text: formData.proposal,
        proposed_timeline: formData.timeline,
        resources: formData.resources,
        goals: formData.goals,
        sacred_alignment: formData.sacredAlignment,
      };

      // Call the API
      const response = await createPartnershipProposal(apiPayload);
      console.log("Partnership Proposal Response:", response);
      showToast('Your partnership proposal has been submitted successfully! We will review it and get back to you soon.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        organizationName: '',
        role: '',
        organizationType: '',
        partnershipType: '',
        proposal: '',
        website: '',
        timeline: '',
        resources: '',
        goals: '',
        sacredAlignment: true,
      });
    } catch (error) {
      showToast('Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const stats = [
    { number: `${incrementMonthly(15,1000)}+`, label: "Global Partners", icon: Globe },
    { number: `${incrementMonthly(43,200)}+`, label: "Countries Connected", icon: Users },
    { number: `${incrementMonthly(17,50)}+`, label: "Languages Served", icon: BookOpen },
    { number: "100%", label: "Sacred Focus", icon: Award }
  ];

  const organizationTypes = [
    'Spiritual/Religious Organization',
    'Educational Institution',
    'Cultural Center',
    'Music/Arts Organization',
    'Research Institution',
    'Media Company',
    'Non-Profit Foundation',
    'Government Agency',
    'Technology Company',
    'Other'
  ];

  const partnershipTypes = [
    'Content Collaboration',
    'Educational Partnership',
    'Cultural Exchange',
    'Research Collaboration',
    'Distribution Partnership',
    'Spiritual Community Alliance',
    'Technology Integration',
    'Media Partnership',
    'Funding/Sponsorship',
    'Other'
  ];

  const existingPartnerships = [
    {
      name: "Dr. Kumar Foundation USA",
      type: "Founding Institution",
      description: "Primary institutional support and spiritual guidance",
      impact: "Foundational support"
    },
    {
      name: "Sufi Science Center",
      type: "Research Partner",
      description: "Academic research and theoretical framework development",
      impact: "Scientific validation"
    },
    {
      name: "Global Sufi Communities",
      type: "Spiritual Alliance",
      description: "Network of Sufi communities worldwide",
      impact: "Cultural authenticity"
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
              <Handshake className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Sacred
              <span className="block text-emerald-400">Partnerships</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 max-w-4xl mx-auto"
            >
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Join forces with SufiPulse to amplify sacred voices globally. We collaborate with institutions, 
                organizations, and communities that share our commitment to serving divine expression.
              </p>
              <blockquote className="text-2xl font-light italic text-emerald-300 mb-4">
                "Together we can reach hearts that neither of us could touch alone"
              </blockquote>
              <p className="text-slate-300">
                Explore partnership opportunities that align with our sacred mission.
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

      {/* Existing Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Our Sacred Alliances
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Current partnerships that strengthen our mission and expand our global reach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {existingPartnerships.map((partnership, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{partnership.name}</h3>
                <p className="text-emerald-600 font-medium text-sm mb-3">{partnership.type}</p>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{partnership.description}</p>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {partnership.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Proposal Form */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Propose a Partnership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Share your vision for collaboration and let's explore how we can serve the sacred together
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
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

              {/* Organization Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization Name *</label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Name of your organization"
                    required
                  />
                  {errors.organizationName && <p className="text-sm text-red-600 mt-1">{errors.organizationName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Your Role/Title *</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="Your position in the organization"
                    required
                  />
                  {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Organization Type *</label>
                  <select
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Organization Type</option>
                    {organizationTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.organizationType && <p className="text-sm text-red-600 mt-1">{errors.organizationType}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Type *</label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    required
                  >
                    <option value="">Select Partnership Type</option>
                    {partnershipTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.partnershipType && <p className="text-sm text-red-600 mt-1">{errors.partnershipType}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Organization Website/Social Media</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="https://your-organization.com"
                />
              </div>

              {/* Partnership Details */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Proposal *</label>
                <textarea
                  name="proposal"
                  value={formData.proposal}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="Please describe your partnership proposal, goals, and how it aligns with SufiPulse's mission..."
                  required
                />
                {errors.proposal && <p className="text-sm text-red-600 mt-1">{errors.proposal}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Proposed Timeline</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., 6 months, ongoing, specific dates"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resources You Can Provide</label>
                  <input
                    type="text"
                    name="resources"
                    value={formData.resources}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                    placeholder="e.g., expertise, platform, funding, network"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Goals</label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
                  placeholder="What do you hope to achieve through this partnership?"
                />
              </div>

              {/* Sacred Alignment */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                <h4 className="font-medium text-emerald-800 mb-2">Sacred Alignment</h4>
                <p className="text-sm text-emerald-700">
                  SufiPulse partnerships are guided by our commitment to serving the sacred without commercialization. 
                  We seek collaborations that honor spiritual values, promote global unity, and amplify divine voices 
                  while maintaining the integrity of our non-commercial mission.
                </p>
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
                      <Handshake className="w-5 h-5" />
                      <span>Submit Partnership Proposal</span>
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
            Build Sacred Connections
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join our network of partners who share our commitment to amplifying divine voices and 
            connecting hearts across cultures through the power of sacred expression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>Learn About Our Mission</span>
            </Link>
            <Link
              href="/ethical-policy"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Target className="w-5 h-5" />
              <span>Our Ethical Policy</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Heart className="w-5 h-5" />
              <span>General Contact</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;