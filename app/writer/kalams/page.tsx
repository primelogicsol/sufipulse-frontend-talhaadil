"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { BookOpen, User, PenTool, Menu, X, Eye, Edit, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { getKalamsByWriter } from "@/services/writer"

interface Kalam {
  id: number
  title: string
  language: string
  theme: string
  kalam_text: string
  description: string
  sufi_influence: string
  musical_preference: string
  youtube_link: string | null
  writer_id: number
  vocalist_id: number | null
  published_at: string | null
  created_at: string
  updated_at: string
}

interface Submission {
  id: number
  kalam_id: number
  status: string
  user_approval_status: string
  admin_comments: string
  writer_comments: string
  created_at: string
  updated_at: string
  vocalist_approval_status: string
}

interface KalamWithSubmission {
  kalam: Kalam
  submission?: Submission
}

export default function MyKalams() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [kalams, setKalams] = useState<KalamWithSubmission[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = [
    { name: "Dashboard", href: "/", icon: User, current: false },
    { name: "Submit Kalam", href: "/submit", icon: PenTool, current: false },
    { name: "My Kalams", href: "/kalams", icon: BookOpen, current: true },
  ]

  useEffect(() => {
    fetchKalams()
  }, [])

  const fetchKalams = async () => {
    try {
      const response = await getKalamsByWriter()
      if (response.status === 200) {
        setKalams(response.data.kalams || [])
      }
    } catch (error) {
      console.error("Failed to fetch kalams:", error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-slate-600 bg-slate-100"
      case "admin_approved":
        return "text-emerald-900 bg-emerald-50"
      case "final_approved":
        return "text-emerald-900 bg-emerald-50"
      case "complete_approved":
        return "text-emerald-900 bg-emerald-50"
      case "admin_rejected":
        return "text-red-600 bg-red-50"
      case "changes_requested":
        return "text-orange-600 bg-orange-50"
      default:
        return "text-slate-600 bg-slate-100"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />
      case "admin_approved":
      case "final_approved":
      case "complete_approved":
        return <CheckCircle className="w-4 h-4" />
      case "admin_rejected":
        return <XCircle className="w-4 h-4" />
      case "changes_requested":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const formatStatus = (status: string) => {
    return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase())
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your kalams...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-slate-900/50" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-slate-900 p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-white">SufiPulse</h1>
            <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    item.current ? "bg-emerald-900 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
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

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:bg-slate-900 lg:p-6 lg:block">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white">SufiPulse Writer</h1>
          <p className="text-slate-400 text-sm mt-1">Dashboard</p>
        </div>
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.current ? "bg-emerald-900 text-white" : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <div className="bg-white border-b border-slate-200 px-4 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-600 hover:text-slate-900">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-slate-900">My Kalams</h2>
            <Link
              href="/submit"
              className="px-4 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Submit New
            </Link>
          </div>
        </div>

        {/* Kalams list */}
        <div className="p-4 lg:p-8">
          {kalams.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">No kalams yet</h3>
              <p className="text-slate-600 mb-6">Start by submitting your first sacred poetry</p>
              <Link
                href="/submit"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
              >
                <PenTool className="w-5 h-5" />
                <span>Submit Kalam</span>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {kalams.map((item) => (
                <div key={item.kalam.id} className="bg-white rounded-lg border border-slate-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.kalam.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                          {item.kalam.language}
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded">
                          {item.kalam.theme}
                        </span>
                        {item.submission && (
                          <span
                            className={`px-2 py-1 text-sm rounded flex items-center space-x-1 ${getStatusColor(item.submission.status)}`}
                          >
                            {getStatusIcon(item.submission.status)}
                            <span>{formatStatus(item.submission.status)}</span>
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 text-sm line-clamp-2">
                        {item.kalam.description || item.kalam.kalam_text.substring(0, 100) + "..."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-slate-500 text-sm">
                      Created {new Date(item.kalam.created_at).toLocaleDateString()}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/kalams/${item.kalam.id}`}
                        className="inline-flex items-center space-x-1 px-3 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </Link>
                      {item.submission && !["final_approved", "complete_approved"].includes(item.submission.status) && (
                        <Link
                          href={`/kalams/${item.kalam.id}/edit`}
                          className="inline-flex items-center space-x-1 px-3 py-2 text-emerald-900 hover:text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
