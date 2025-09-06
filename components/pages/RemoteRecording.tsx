'use client';
import React, { useState } from 'react';
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

interface RemoteRecordingProps {
  onSubmit?: (formData: any) => void;
}

const RemoteRecording: React.FC<RemoteRecordingProps> = ({ onSubmit }) => {
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
      if (onSubmit) {
        await onSubmit(formData);
        toast.success('Your remote recording request has been submitted successfully! Our team will contact you soon to coordinate the session.');
      }
      
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

  return (
    <div className="bg-white">
      {/* Form Section */}
      <div className="bg-white rounded-2xl p-8">
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
  );
};

export default RemoteRecording;