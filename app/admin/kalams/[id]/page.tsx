"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { getKalamDetails } from "@/services/writer"

interface KalamDetails {
  kalam: {
    id: number
    title: string
    language: string
    theme: string
    kalam_text: string
    description: string
    sufi_influence: string
    musical_preference: string
    youtube_link: string
    writer_id: number
    vocalist_id: number
    published_at: string | null
    created_at: string
    updated_at: string
  }
  submission: {
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
}

export default function KalamDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [kalamDetails, setKalamDetails] = useState<KalamDetails | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKalamDetails = async () => {
      try {
        console.log("[v0] Fetching kalam details for ID:", params.id)
        const response = await getKalamDetails(String(params.id))
        console.log("[v0] Kalam details response:", response.data)
        setKalamDetails(response.data)
      } catch (error) {
        console.error("[v0] Error fetching kalam details:", error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchKalamDetails()
    }
  }, [params.id])

  if (loading) {
      return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading your kalam...</p>
        </div>
      </div>
    );
  }

  if (!kalamDetails) {
    return (
      <div className="text-center py-12">
        <div className="text-slate-800 text-lg">Kalam not found</div>
        <button
          onClick={() => router.back()}
          className="mt-4 bg-emerald-900 text-emerald-50 py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors duration-200"
        >
          Go Back
        </button>
      </div>
    )
  }

  const { kalam, submission } = kalamDetails

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{kalam.title}</h1>
          <p className="text-slate-800 mt-2">Kalam ID: {kalam.id}</p>
        </div>
        <button
          onClick={() => router.back()}
          className="bg-slate-800 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-900 transition-colors duration-200"
        >
          ← Back
        </button>
      </div>

      {/* Kalam Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Info */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Kalam Information</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-800">Language</label>
              <p className="text-slate-900">{kalam.language}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Theme</label>
              <p className="text-slate-900">{kalam.theme}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Sufi Influence</label>
              <p className="text-slate-900">{kalam.sufi_influence}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Musical Preference</label>
              <p className="text-slate-900">{kalam.musical_preference}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Writer ID</label>
              <p className="text-slate-900">{kalam.writer_id}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Vocalist ID</label>
              <p className="text-slate-900">{kalam.vocalist_id}</p>
            </div>
            {kalam.youtube_link && (
              <div>
                <label className="text-sm font-medium text-slate-800">YouTube Link</label>
                <a
                  href={kalam.youtube_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:underline block"
                >
                  Watch on YouTube
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Submission Status */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Submission Status</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-800">Overall Status</label>
              <span
                className={`inline-block px-2 py-1 rounded-md text-sm font-medium ml-2 ${
                  submission.status === "final_approved"
                    ? "bg-emerald-50 text-emerald-900"
                    : submission.status === "pending"
                      ? "bg-yellow-50 text-yellow-800"
                      : "bg-red-50 text-red-800"
                }`}
              >
                {submission.status}
              </span>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">User Approval</label>
              <span
                className={`inline-block px-2 py-1 rounded-md text-sm font-medium ml-2 ${
                  submission.user_approval_status === "approved"
                    ? "bg-emerald-50 text-emerald-900"
                    : submission.user_approval_status === "pending"
                      ? "bg-yellow-50 text-yellow-800"
                      : "bg-red-50 text-red-800"
                }`}
              >
                {submission.user_approval_status}
              </span>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Vocalist Approval</label>
              <span
                className={`inline-block px-2 py-1 rounded-md text-sm font-medium ml-2 ${
                  submission.vocalist_approval_status === "approved"
                    ? "bg-emerald-50 text-emerald-900"
                    : submission.vocalist_approval_status === "pending"
                      ? "bg-yellow-50 text-yellow-800"
                      : "bg-red-50 text-red-800"
                }`}
              >
                {submission.vocalist_approval_status}
              </span>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Admin Comments</label>
              <p className="text-slate-900">{submission.admin_comments || "No comments"}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-800">Writer Comments</label>
              <p className="text-slate-900">{submission.writer_comments || "No comments"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Content</h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-800">Description</label>
            <p className="text-slate-900 mt-1">{kalam.description}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Kalam Text</label>
            <div className="bg-slate-50 p-4 rounded-md mt-1">
              <p className="text-slate-900 whitespace-pre-wrap">{kalam.kalam_text}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Timestamps */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Timeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-slate-800">Created At</label>
            <p className="text-slate-900">{new Date(kalam.created_at).toLocaleString()}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Updated At</label>
            <p className="text-slate-900">{new Date(kalam.updated_at).toLocaleString()}</p>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Published At</label>
            <p className="text-slate-900">
              {kalam.published_at ? new Date(kalam.published_at).toLocaleString() : "Not published"}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-800">Submission Updated</label>
            <p className="text-slate-900">{new Date(submission.updated_at).toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
