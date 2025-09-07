"use client"
import { useState, useEffect } from "react"
import type React from "react"

import Link from "next/link"
import { useParams } from "next/navigation"
import { BookOpen, User, PenTool, Menu, X, ArrowLeft, CheckCircle, XCircle, AlertCircle, Clock } from "lucide-react"
import { getKalamDetails } from "@/services/writer"
import { getWriterResponse } from "@/services/writer"

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

interface KalamData {
  kalam: Kalam
  submission: Submission
}

export default function KalamDetail() {
  const params = useParams()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [kalamData, setKalamData] = useState<KalamData | null>(null)
  const [loading, setLoading] = useState(true)
  const [responseLoading, setResponseLoading] = useState(false)
  const [writerResponse, setWriterResponse] = useState({
    user_approval_status: "",
    writer_comments: "",
  })

  useEffect(() => {
    if (params.id) {
      fetchKalam()
    }
  }, [params.id])

  const fetchKalam = async () => {
    try {
      const response = await getKalamDetails(String(params.id))
      if (response.status === 200) {
        setKalamData(response.data)
      }
    } catch (error) {
      console.error("Failed to fetch kalam:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleWriterResponse = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!kalamData || !writerResponse.user_approval_status) return

    setResponseLoading(true)
    try {
      const response = await getWriterResponse(
        kalamData.kalam.id,
        kalamData.submission.id,
        {
          user_approval_status: writerResponse.user_approval_status,
          writer_comments: writerResponse.writer_comments,
        }
      )
      if (response.status === 200) {
        alert("Response submitted successfully!")
        fetchKalam()
        setWriterResponse({ user_approval_status: "", writer_comments: "" })
      } else {
        alert("Failed to submit response. Please try again.")
      }
    } catch (error) {
      alert("Failed to submit response. Please try again.")
    } finally {
      setResponseLoading(false)
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
        return <Clock className="w-5 h-5" />
      case "admin_approved":
      case "final_approved":
      case "complete_approved":
        return <CheckCircle className="w-5 h-5" />
      case "admin_rejected":
        return <XCircle className="w-5 h-5" />
      case "changes_requested":
        return <AlertCircle className="w-5 h-5" />
      default:
        return <Clock className="w-5 h-5" />
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
          <p className="text-slate-600">Loading kalam...</p>
        </div>
      </div>
    )
  }

  if (!kalamData) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium text-slate-900 mb-2">Kalam not found</h3>
          <Link href="/writer/kalams" className="text-emerald-900 hover:text-emerald-800">
            Back to My Kalams
          </Link>
        </div>
      </div>
    )
  }

  const { kalam, submission } = kalamData

  return (
    <div className="min-h-screen bg-slate-50">
      <div>
        <div className="bg-white border-b border-slate-200 px-4 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center space-x-4">
              <Link href="/writer/kalams" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h2 className="text-xl font-semibold text-slate-900">Kalam Details</h2>
            </div>
            {!["final_approved", "complete_approved"].includes(submission.status) && (
              <Link
                href={`/writer/kalams/${kalam.id}/edit`}
                className="px-4 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Edit
              </Link>
            )}
          </div>
        </div>

        <div className="p-4 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900">Status</h3>
                <div
                  className={`px-3 py-2 rounded-lg flex items-center space-x-2 ${getStatusColor(submission.status)}`}
                >
                  {getStatusIcon(submission.status)}
                  <span className="font-medium">{formatStatus(submission.status)}</span>
                </div>
              </div>

              {submission.admin_comments && (
                <div className="bg-slate-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-slate-900 mb-2">Admin Comments</h4>
                  <p className="text-slate-700">{submission.admin_comments}</p>
                </div>
              )}

              {submission.status === "changes_requested" && submission.user_approval_status === "pending" && (
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-medium text-orange-900 mb-4">Response Required</h4>
                  <form onSubmit={handleWriterResponse} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Your Response</label>
                      <select
                        value={writerResponse.user_approval_status}
                        onChange={(e) =>
                          setWriterResponse((prev) => ({ ...prev, user_approval_status: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                        required
                      >
                        <option value="">Select your response</option>
                        <option value="approved">Accept Changes</option>
                        <option value="rejected">Reject Changes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-900 mb-2">Comments</label>
                      <textarea
                        value={writerResponse.writer_comments}
                        onChange={(e) => setWriterResponse((prev) => ({ ...prev, writer_comments: e.target.value }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                        placeholder="Add your comments or request more changes..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={responseLoading}
                      className="px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 disabled:opacity-50 transition-colors"
                    >
                      {responseLoading ? "Submitting..." : "Submit Response"}
                    </button>
                  </form>
                </div>
              )}
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">{kalam.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg">{kalam.language}</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg">{kalam.theme}</span>
                  {kalam.sufi_influence && (
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-900 rounded-lg">{kalam.sufi_influence}</span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Kalam Text</h3>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <pre className="whitespace-pre-wrap text-slate-800 font-serif leading-relaxed">
                      {kalam.kalam_text}
                    </pre>
                  </div>
                </div>

                {kalam.description && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Description</h3>
                    <p className="text-slate-700">{kalam.description}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kalam.musical_preference && (
                    <div>
                      <h4 className="font-medium text-slate-900 mb-2">Musical Preference</h4>
                      <p className="text-slate-700">{kalam.musical_preference}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">Created</h4>
                    <p className="text-slate-700">{new Date(kalam.created_at).toLocaleDateString()}</p>
                  </div>
                </div>

                {kalam.youtube_link && (
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2">YouTube Link</h4>
                    <a
                      href={kalam.youtube_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-900 hover:text-emerald-800 underline"
                    >
                      {kalam.youtube_link}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}