"use client"
import { useState, useEffect } from "react"
import { User, Globe, Award, MapPin, Mic, Clock } from "lucide-react"
import { getVocalistProfile } from "@/services/vocalist"
import { Calendar } from "lucide-react";


interface VocalistProfileData {
  vocalist_id: string
  user_id: number
  vocal_range: string
  languages: string[]
  sample_title: string
  audio_sample_url: string
  sample_description: string
  experience_background: string
  portfolio: string
  availability: string
  status: string
  created_at: string
  updated_at: string
  country: string
  city: string
}

const VocalistProfile = () => {
  const [profileData, setProfileData] = useState<VocalistProfileData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      setLoading(true)
      const response = await getVocalistProfile(2)
      console.log("✅ Profile API Response:", response.data)
      setProfileData(response.data)
    } catch (error: any) {
      console.error("❌ Profile API Error:", error)
      setError(error.response?.data?.message || "Failed to load profile")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-800 text-lg font-medium">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-emerald-900" />
          </div>
          <p className="text-emerald-900 text-lg font-medium mb-6">{error}</p>
          <button
            onClick={fetchProfile}
            className="px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-900/80 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-8 transform transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="w-24 h-24 bg-emerald-900 rounded-full flex items-center justify-center relative overflow-hidden">
              <User className="w-12 h-12 text-white" />
              <div className="absolute inset-0 bg-emerald-900/20"></div>
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Vocalist Profile</h1>
              <p className="text-slate-800 text-lg font-medium">ID: {profileData?.vocalist_id}</p>
              <div className="flex items-center justify-center sm:justify-start space-x-2 mt-3">
                <MapPin className="w-5 h-5 text-slate-800" />
                <p className="text-slate-800 text-base font-medium">{profileData?.city}, {profileData?.country}</p>
              </div>
            </div>
          </div>
          
          {/* Profile Details */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-base">
            <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
              <Mic className="w-5 h-5 text-emerald-900" />
              <span className="text-slate-800 font-medium">Vocal Range: {profileData?.vocal_range}</span>
            </div>
            <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
              <Globe className="w-5 h-5 text-emerald-900" />
              <span className="text-slate-800 font-medium">Languages: {profileData?.languages?.join(", ")}</span>
            </div>
            <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
              <Award className="w-5 h-5 text-emerald-900" />
              <span className="text-slate-800 font-medium">Experience: {profileData?.experience_background}</span>
            </div>
            <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
              <Clock className="w-5 h-5 text-emerald-900" />
              <span className="text-slate-800 font-medium">Availability: {profileData?.availability}</span>
            </div>
            {profileData?.portfolio && (
              <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
                <Globe className="w-5 h-5 text-emerald-900" />
                <a
                  href={profileData.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 hover:text-emerald-900/80 font-medium underline transition-colors duration-200"
                >
                  View Portfolio
                </a>
              </div>
            )}
            <div className="flex items-center space-x-3 bg-emerald-50 p-4 rounded-lg">
              <Calendar className="w-5 h-5 text-emerald-900" />
              <span className="text-slate-800 font-medium">Joined: {new Date(profileData?.created_at || "").toLocaleDateString()}</span>
            </div>
          </div>

          {/* Audio Sample */}
          {profileData?.audio_sample_url && (
            <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{profileData.sample_title}</h3>
              <p className="text-slate-800 mb-4 leading-relaxed">{profileData.sample_description}</p>
              <audio
                controls
                className="w-full rounded-lg bg-emerald-50 p-2"
                style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
              >
                <source src={profileData.audio_sample_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VocalistProfile