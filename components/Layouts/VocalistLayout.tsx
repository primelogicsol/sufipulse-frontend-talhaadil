"use client";
import { useState, useEffect } from "react";
import type React from "react";
import { User, Music, Menu, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { checkVocalistRegistration } from "@/services/vocalist";
import SubmitSampleClip from "../pages/SubmitSampleClip";

interface VocalistLayoutProps {
  children: React.ReactNode;
}

const VocalistLayout: React.FC<VocalistLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const fetchRegistrationStatus = async () => {
      try {
        const response = await checkVocalistRegistration();
        setIsRegistered(response.data.is_registered);
      } catch (error) {
        console.error("Failed to check vocalist registration:", error);
        setIsRegistered(false);
      }
    };
    fetchRegistrationStatus();
  }, []);

  const navigation = [
    { name: "Profile", href: "/vocalist/profile", icon: User, current: pathname === "/vocalist/profile" },
    { name: "Kalam", href: "/vocalist/kalam", icon: Music, current: pathname === "/vocalist/kalam" },
  ];

  // Loader component
  if (isRegistered === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-slate-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isRegistered) return <SubmitSampleClip />;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded-lg shadow-lg border border-slate-200"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg">Vocalist</h1>
                <p className="text-slate-400 text-sm">Dashboard</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      item.current
                        ? "bg-emerald-600 text-white"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="p-6 border-t border-slate-800">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="lg:ml-64">
        <header className="bg-white shadow-sm border-b border-slate-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="lg:hidden w-8"></div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {pathname === "/vocalist/profile" ? "Profile" : "Kalam Management"}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base">
                  {pathname === "/vocalist/profile"
                    ? "View your vocalist profile and kalams"
                    : "Manage kalam approvals and recording requests"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
};

export default VocalistLayout;
