'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Lock, Users, Heart, Globe, Award } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import FormCard from '../components/ui/FormCard';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedRole, setSelectedRole] = useState('writer');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use selected role or stored role
      const userRole = selectedRole || localStorage.getItem('userRole') || 'writer';
      
      // Store user info in localStorage
      localStorage.setItem('isRegistered', 'true');
      localStorage.setItem('hasEverRegistered', 'true');
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('userName', formData.email.split('@')[0]); // Use email prefix as name
      
      toast.success('Welcome back to SufiPulse!');
      
      // Redirect to appropriate dashboard based on user role
      setTimeout(() => {
        if (userRole === 'writer') {
          window.location.href = '/writer-dashboard';
        } else if (userRole === 'vocalist') {
          window.location.href = '/vocalist-dashboard';
        } else if (['super_admin', 'moderator', 'collaborator'].includes(userRole)) {
          window.location.href = '/admin-dashboard';
        } else {
          window.location.href = '/dashboard';
        }
      }, 1000);
      
    } catch (error) {
      toast.error('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const roleOptions = [
    { id: 'writer', label: 'Writer', description: 'Submit sacred poetry' },
    { id: 'vocalist', label: 'Vocalist', description: 'Lend voice to divine words' },
    { id: 'super_admin', label: 'Super Admin', description: 'Full system access' },
    { id: 'moderator', label: 'Moderator', description: 'Review and moderate content' },
    { id: 'collaborator', label: 'Collaborator', description: 'Assist with operations' }
  ];

  const stats = [
    { number: "89", label: "Active Writers", icon: Users },
    { number: "43", label: "Vocalists", icon: Heart },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "300+", label: "Collaborations", icon: Award }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-slate-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold leading-tight"
              >
                Welcome Back to
                <span className="block text-emerald-400">SufiPulse</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-slate-300 leading-relaxed"
              >
                Continue your sacred journey. Access your dashboard, track your submissions, 
                and connect with our global spiritual community.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20"
            >
              <p className="text-emerald-300 font-medium mb-2">Sacred Community Access</p>
              <blockquote className="text-lg italic">
                "Your spiritual journey continues where you left off"
              </blockquote>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                  >
                    <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FormCard
              title="Sign In"
              subtitle="Access your sacred creative space"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Login as:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {roleOptions.map((role) => (
                      <motion.button
                        key={role.id}
                        type="button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedRole(role.id)}
                        className={`
                          p-3 rounded-lg border-2 text-sm font-medium transition-all duration-200 text-left
                          ${selectedRole === role.id
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-slate-200 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50'
                          }
                        `}
                      >
                        <div className="font-semibold">{role.label}</div>
                        <div className="text-xs opacity-75">{role.description}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  icon={<Mail className="w-5 h-5" />}
                  error={errors.email}
                  required
                />

                <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  icon={<Lock className="w-5 h-5" />}
                  showPasswordToggle
                  onTogglePassword={() => setShowPassword(!showPassword)}
                  showPassword={showPassword}
                  error={errors.password}
                  required
                />

                <div className="flex items-center justify-between">
                  <motion.label
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-slate-600">Remember me</span>
                  </motion.label>
                  
                  <Link
                    href="/forgot-password"
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={loading}
                  className="w-full"
                >
                  Sign In to SufiPulse
                </Button>

                <div className="text-center pt-4 border-t border-slate-200">
                  <p className="text-slate-600">
                    Don't have an account?{' '}
                    <Link
                      href="/register"
                      className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
                    >
                      Create one here
                    </Link>
                  </p>
                </div>
              </form>
            </FormCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;