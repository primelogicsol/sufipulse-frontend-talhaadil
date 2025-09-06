"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, PenTool, BookOpen, X } from "lucide-react"

export default function WriterDashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Submit Kalam", href: "/writer/submit", icon: PenTool },
    { name: "My Kalams", href: "/writer/kalams", icon: BookOpen },
  ]

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div
          className="fixed inset-0 bg-slate-900/50"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-white">SufiPulse</h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-emerald-900 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:bg-slate-900 lg:p-6 lg:block">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">SufiPulse Writer</h1>
          <p className="text-slate-400 text-sm mt-1">Dashboard</p>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-emerald-900 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6">
        <button
          className="lg:hidden mb-4 px-4 py-2 bg-emerald-900 text-white rounded-lg"
          onClick={() => setSidebarOpen(true)}
        >
          Open Menu
        </button>
        <div className="bg-white rounded-xl shadow p-6 min-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  )
}
