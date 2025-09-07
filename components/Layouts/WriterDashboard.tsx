'use client';
import { useEffect, useState } from 'react';
import type React from 'react';
import { PenTool, BookOpen, Menu, X, UserStar, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';


interface WriterDashboardLayoutProps {
  children: React.ReactNode;
}

const WriterDashboardLayout: React.FC<WriterDashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [name,setName]=useState('')

  useEffect(()=>{
    const profile = Cookies.get("name");
    setName(profile ?? '');
  })

  const navigation = [
    { name: 'Submit Kalam', href: '/writer/submit', icon: PenTool, current: pathname === '/writer/submit' },
    { name: 'My Kalams', href: '/writer/kalams', icon: BookOpen, current: pathname === '/writer/kalams' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-3/4 sm:w-64 max-w-xs bg-slate-900 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:w-64 lg:max-w-none`}
        aria-hidden={!sidebarOpen}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 sm:p-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <PenTool className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-base sm:text-lg">SufiPulse Writer</h1>
                <p className="text-slate-400 text-xs sm:text-sm">Dashboard</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 sm:p-6 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    item.current
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="p-4 sm:p-6 border-t border-slate-800">
            <button className="w-full flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors text-sm sm:text-base">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-60 z-30 lg:hidden blur-2xl"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div>
        <header className="bg-white shadow-sm border-b border-slate-200 px-4 sm:px-6 py-4 lg:ml-64">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg shadow-sm"
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
              >
                {sidebarOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />}
              </button>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  {pathname === '/writer/submit' ? 'Submit Kalam' : 'My Kalams'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {pathname === '/writer/submit'
                    ? 'Submit a new kalam for review'
                    : 'Manage your submitted kalams'}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {/* Avatar Circle */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <User2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>

              {/* Name */}
              <span className="text-sm sm:text-base font-medium text-gray-800">
                {name}
              </span>
            </div>

          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 lg:ml-64">{children}</main>
      </div>
    </div>
  );
};

export default WriterDashboardLayout;