"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  User,
  Globe,
  BookOpen,
  Calendar,
  MapPin,
  ExternalLink,
  Edit,
  PenTool,
  Award,
  Clock,
} from "lucide-react"
import { getWriterProfile } from "@/services/writer"

interface WriterProfileData {
  user_id: number
  writing_styles: string[]
  languages: string[]
  sample_title: string
  experience_background: string
  portfolio: string
  availability: string
  created_at: string
  updated_at: string
  country: string
  city: string
}

interface WriterProfileProps {
  writerId: number
}

const WriterProfile: React.FC<WriterProfileProps> = ({ writerId }) => {
  const [profile, setProfile] = useState<WriterProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true)
        const response = await getWriterProfile(1)
        setProfile(response.data)
      } catch (err: any) {
        console.error("Error fetching writer profile:", err)
        setError("Failed to load profile data")
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [writerId])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-slate-800 font-medium">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-lg">
          <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-emerald-900" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-2">Profile Not Found</h2>
          <p className="text-slate-800">{error || "Unable to load profile data"}</p>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <div className="relative h-48 sm:h-64 bg-gradient-to-r from-emerald-900 to-emerald-500">
        <Link
          href={`/writer/${profile.user_id}/EditWriterProfile`}
          className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition"
        >
          <Edit className="w-4 h-4" />
          <span>Edit</span>
        </Link>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 -mt-20"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative">
          {/* Avatar + Header */}
          <div className="flex flex-col items-center text-center -mt-16">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-900 to-emerald-500 flex items-center justify-center text-4xl font-bold text-white shadow-lg border-4 border-white">
              <User />
            </div>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">Writer Profile</h1>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-900 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {profile.city}, {profile.country}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-900 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Joined {formatDate(profile.created_at)}
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-900 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Updated {formatDate(profile.updated_at)}
              </span>
            </div>
          </div>

          {/* 2-Column Grid Layout */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LEFT COLUMN */}
            <div className="space-y-10">
              {/* Featured Work */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-emerald-900" /> Featured Work
                </h2>
                <div className="bg-slate-50 rounded-xl p-5 hover:bg-emerald-50 transition">
                  <h3 className="text-lg font-medium text-slate-800">{profile.sample_title}</h3>
                  <p className="text-slate-800 text-sm">Sample work showcasing writing expertise</p>
                </div>
              </section>

              {/* Experience */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-emerald-900" /> Experience & Background
                </h2>
                <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {profile.experience_background}
                </p>
              </section>

              {/* Availability */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-emerald-900" /> Availability
                </h2>
                <p className="text-slate-800">{profile.availability}</p>
              </section>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">
              {/* Portfolio */}
              {profile.portfolio && (
                <section>
                  <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                    <ExternalLink className="w-5 h-5 text-emerald-900" /> Portfolio
                  </h2>
                  <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-medium transition"
                  >
                    <span>View Portfolio</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </section>
              )}

              {/* Writing Styles */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <PenTool className="w-5 h-5 text-emerald-900" /> Writing Styles
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.writing_styles.map((style, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-900 hover:bg-emerald-100 transition"
                    >
                      {style}
                    </span>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-emerald-900" /> Languages
                </h2>
                <div className="flex flex-wrap gap-2">
                  {profile.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-slate-50 text-slate-800 hover:bg-emerald-50 transition"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WriterProfile