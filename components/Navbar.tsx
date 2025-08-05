import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, LogOut, Settings, UserCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Check authentication status from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isRegistered') === 'true';
  });
  
  // Check if user has ever registered (even if not currently logged in)
  const [hasEverRegistered, setHasEverRegistered] = useState(() => {
    return localStorage.getItem('hasEverRegistered') === 'true';
  });
  
  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') as 'writer' | 'vocalist' | 'super_admin' | 'moderator' | 'collaborator' || 'writer';
  });
  
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'User';
  });

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('isRegistered');
    // Keep hasEverRegistered and userRole for future logins
    // localStorage.removeItem('userRole');
    // localStorage.removeItem('userName');
    setIsLoggedIn(false);
    setActiveDropdown(null);
  };

  // Listen for storage changes (when user logs in from another tab)
  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isRegistered') === 'true');
      setHasEverRegistered(localStorage.getItem('hasEverRegistered') === 'true');
      setUserRole(localStorage.getItem('userRole') as 'writer' | 'vocalist' | 'super_admin' | 'moderator' | 'collaborator' || 'writer');
      setUserName(localStorage.getItem('userName') || 'User');
    };

    // Also check on component mount
    handleStorageChange();

    window.addEventListener('storage', handleStorageChange);
    
    // Listen for manual localStorage changes in same tab
    const interval = setInterval(handleStorageChange, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const getDashboardPath = (role: string) => {
    switch (role) {
      case 'writer':
        return '/writer-dashboard';
      case 'vocalist':
        return '/vocalist-dashboard';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return '/admin-dashboard';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return '/admin-dashboard';
      default:
        return '/dashboard';
    }
  };

  const getSubmissionPath = (role: string) => {
    switch (role) {
      case 'writer':
        return '/contact?type=writer';
      case 'vocalist':
        return '/contact?type=vocalist';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return '/admin-dashboard';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return '/admin-dashboard';
      default:
        return '/contact?type=writer';
    }
  };

  const getSubmissionLabel = (role: string) => {
    switch (role) {
      case 'writer':
        return 'Submit New Kalam';
      case 'vocalist':
        return 'Join New Project';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return 'Admin Panel';
      case 'super_admin':
      case 'moderator':
      case 'collaborator':
        return 'Admin Panel';
      default:
        return 'Submit New Kalam';
    }
  };

  const menuItems = [
    {
      name: 'Watch',
      path: '/watch',
      dropdown: [
        { name: 'All Videos', path: '/gallery' },
        { name: 'Qawwali', path: '/gallery?category=qawwali' },
        { name: 'Chant', path: '/gallery?category=chant' },
        { name: 'Anthem', path: '/gallery?category=anthem' },
        { name: 'Whisper Kalam', path: '/gallery?category=whisper' },
        { name: 'Instrumentals', path: '/gallery?category=instrumental' },
        { name: 'Featured Playlist', path: '/gallery?featured=true' },
        { name: 'By Theme', path: '/gallery?by=theme' }
      ]
    },
    {
      name: 'Writers',
      path: '/writers',
      dropdown: [
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Submit Your Kalam', path: '/submit-kalam' },
        { name: 'Top Writers', path: '/top-writers' },
        { name: 'Kalam Library', path: '/kalam-library' },
        { name: 'Writer FAQs', path: '/writer-faqs' }
      ]
    },
    {
      name: 'Vocalists',
      path: '/vocalists',
      dropdown: [
        { name: 'Vocalist Directory', path: '/vocalists' },
        { name: 'How It Works', path: '/vocalist-how-it-works' },
        { name: 'Join the Vocalist Pool', path: '/join-vocalist-pool' },
        { name: 'Vocal Style Gallery', path: '/gallery?filter=vocals' },
        { name: 'Submit Sample Clip', path: '/submit-sample-clip' }
      ]
    },
    {
      name: 'Studio',
      path: '/studio',
      dropdown: [
        { name: 'Inside Our Studio', path: '/studio' },
        { name: 'Meet the Engineers', path: '/studio-engineers' },
        { name: 'Past Productions', path: '/studio-productions' },
        { name: 'How We Select Music Style', path: '/music-style-selection' },
        { name: 'Behind-the-Scenes Videos', path: '/studio-diaries' }
      ]
    },
    {
      name: 'Collaborate',
      path: '/contact',
      dropdown: [
        { name: 'Submit Your Kalam', path: '/submit-kalam' },
        { name: 'Join Vocalist Pool', path: '/join-vocalist-pool' },
        { name: 'Studio Visit Request', path: '/studio-visit' },
        { name: 'Remote Recording Request', path: '/remote-recording' },
        { name: 'Partnership Proposal', path: '/partnership' },
        { name: 'Media & Press', path: '/media-press' }
      ]
    },
    {
      name: 'Reflections',
      path: '/studio-diaries',
      dropdown: [
        { name: 'Studio Diaries', path: '/studio-diaries' },
        { name: 'Guest Blogs', path: '/guest-blogs' },
        { name: 'Sufi Music Theory', path: '/sufi-music-theory' },
        { name: 'Spiritual Commentary', path: '/spiritual-commentary' },
        { name: 'Legacy of Dr. Kumar', path: '/legacy-of-dr-kumar' }
      ]
    },
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Who We Are', path: '/who-we-are' },
        { name: 'Our Mission', path: '/our-mission' },
        { name: 'Ethical Policy', path: '/ethical-policy' },
        { name: 'Dr. Kumar Foundation USA', path: '/dr-kumar-foundation' },
        { name: 'Sufi Science Center', path: '/sufi-science-center' },
        { name: 'Acknowledgments', path: '/acknowledgments' },
        { name: 'General Contact', path: '/contact' }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/Untitled (250 x 250 px) (1).png" 
              alt="SufiPulse Logo" 
              className="w-10 h-10 rounded-xl shadow-lg object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-800">SufiPulse</span>
              <span className="text-xs text-emerald-600 font-medium -mt-1">Global Collaboration</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
            >
              Home
            </Link>

            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.path}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Conditional Dashboard */}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {isLoggedIn ? (
              /* Authenticated User Menu */
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <UserCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-sm">{userName}</div>
                    <div className="text-xs text-slate-500 capitalize">{userRole}</div>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === 'user' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <div className="font-medium text-slate-800">{userName}</div>
                      <div className="text-sm text-slate-500 capitalize">{userRole} Account</div>
                    </div>
                    <Link
                      href={getDashboardPath(userRole)}
                      className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      My Dashboard
                    </Link>
                    <Link
                      href={getSubmissionPath(userRole)}
                      className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <User className="h-4 w-4 mr-3" />
                      {getSubmissionLabel(userRole)}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-slate-100 mt-1 pt-3"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Non-authenticated User Menu */
              <div className="flex items-center space-x-4">
                {hasEverRegistered ? (
                  <Link
                    href="/login"
                    className="px-4 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    Login
                  </Link>
                ) : null}
                <Link
                  href="/join"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all duration-200"
                >
                  Join Community
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-slate-700 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {menuItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(`mobile-${item.name}`)}
                    className="flex items-center justify-between w-full px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === `mobile-${item.name}` && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.path}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}


              {/* Mobile Auth */}
              <div className="pt-4 border-t border-slate-200 space-y-2">
                {isLoggedIn ? (
                  <>
                    <div className="px-3 py-2 border-b border-slate-200 mb-2">
                      <div className="font-medium text-slate-800">{userName}</div>
                      <div className="text-sm text-slate-500 capitalize">{userRole} Account</div>
                    </div>
                    <Link
                      href={getDashboardPath(userRole)}
                      className="flex items-center px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      My Dashboard
                    </Link>
                    <Link
                      href={getSubmissionPath(userRole)}
                      className="flex items-center px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-4 w-4 mr-2" />
                      {getSubmissionLabel(userRole)}
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center px-3 py-2 text-red-600 hover:text-red-700 font-medium transition-colors"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {hasEverRegistered && (
                      <Link
                        href="/login"
                        className="block w-full text-left px-3 py-2 text-slate-700 hover:text-emerald-600 font-medium transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                    )}
                    <Link
                      href="/join"
                      className="block w-full text-left px-3 py-2 bg-emerald-600 text-white rounded-lg font-medium transition-colors mx-3"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Community
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;