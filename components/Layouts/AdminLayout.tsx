"use client";

import { useState } from "react";
import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LayoutDashboard, Mic, PenTool, BookText, Building, Globe, User2, LogOut } from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Vocalists", href: "/admin/vocalists", icon: Mic },
  { name: "Writers", href: "/admin/writers", icon: PenTool },
  { name: "Kalams", href: "/admin/kalams", icon: BookText },
  { name: "Studio Requests", href: "/admin/studio-requests", icon: Building },
  { name: "Remote Requests", href: "/admin/remote-requests", icon: Globe },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = menuItems.find((item) => pathname === item.href);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-3/4 sm:w-64 max-w-xs bg-slate-900 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-64 lg:max-w-none`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 bg-slate-800 border-b border-slate-700">
            <h1 className="text-lg sm:text-xl font-bold text-emerald-50">Admin Dashboard</h1>
          </div>

          {/* Nav */}
          <nav className="flex-1 p-4 sm:p-6 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg transition-colors text-sm sm:text-base ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-slate-800">
            <button className="w-full flex items-center space-x-3 px-3 py-2 sm:px-4 sm:py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors text-sm sm:text-base">
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main */}
      <div>
        <header className="bg-white shadow-sm border-b border-slate-200 px-4 sm:px-6 py-4 lg:ml-64">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg shadow-sm"
                aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
                )}
              </button>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                  {currentPage?.name || "Dashboard"}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  {currentPage?.name
                    ? `Manage ${currentPage.name.toLowerCase()}`
                    : "Overview of platform activity"}
                </p>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <User2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-sm sm:text-base font-medium text-gray-800">
                Admin
              </span>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 lg:ml-64">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
