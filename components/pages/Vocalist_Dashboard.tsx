"use client"
import { useState, useEffect } from "react"
import { User, Music, Menu, X, LogOut } from "lucide-react"
import { checkVocalistRegistration } from "@/services/vocalist"
import SubmitSampleClip from "./SubmitSampleClip"
import VocalistProfile from "./VocalistProfile"
import KalamApproval from "./KalamApproval"

const Vocalist_Dashboard = () => {
  const [isRegistered, setIsRegistered] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<"profile" | "kalam">("profile")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    checkRegistration()
  }, [])

  const checkRegistration = async () => {
    try {
      setLoading(true)
      const response = await checkVocalistRegistration()
      console.log("✅ Registration Check API Response:", response.data)
      setIsRegistered(response.data.is_registered)
    } catch (error: any) {
      console.error("❌ Registration Check API Error:", error)
      // If API fails, assume not registered to show form
      setIsRegistered(false)
    } finally {
      setLoading(false)
    }
  }

  const handleRegistrationComplete = () => {
    setIsRegistered(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Checking registration status...</p>
        </div>
      </div>
    )
  }

  // Show registration form if not registered
  if (isRegistered === false) {
    return <SubmitSampleClip />
  }

  // Show dashboard if registered
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-white rounded-lg shadow-lg border border-slate-200"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
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

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              <button
                onClick={() => {
                  setCurrentPage("profile")
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPage === "profile"
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button
                onClick={() => {
                  setCurrentPage("kalam")
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  currentPage === "kalam"
                    ? "bg-emerald-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Music className="w-5 h-5" />
                <span>Kalam</span>
              </button>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-800">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="lg:hidden w-8"></div> {/* Spacer for mobile menu button */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {currentPage === "profile" ? "Profile" : "Kalam Management"}
                </h2>
                <p className="text-slate-600">
                  {currentPage === "profile"
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

        {/* Page content */}
        <main className="p-6">
          {currentPage === "profile" && <VocalistProfile />}
          {currentPage === "kalam" && <KalamApproval />}
        </main>
      </div>
    </div>
  )
}

export default Vocalist_Dashboard
