"use client"
import { useState } from "react"
import type React from "react"

import Link from "next/link"
import { PenTool, ArrowLeft, BookOpen, User, Menu, X } from "lucide-react"

export default function SubmitKalam() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    theme: "",
    kalam_text: "",
    description: "",
    sufi_influence: "",
    musical_preference: "",
    writer_comments: "",
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.title.trim()) newErrors.title = "Title is required"
    if (!formData.language) newErrors.language = "Language is required"
    if (!formData.theme) newErrors.theme = "Theme is required"
    if (!formData.kalam_text.trim()) newErrors.kalam_text = "Kalam text is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    try {
      const response = await fetch("https://sufi-sigma.vercel.app/kalams/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Kalam submitted successfully!")
        setFormData({
          title: "",
          language: "",
          theme: "",
          kalam_text: "",
          description: "",
          sufi_influence: "",
          musical_preference: "",
          writer_comments: "",
        })
      } else {
        alert("Submission failed. Please try again.")
      }
    } catch (error) {
      alert("Submission failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
           {/* Main content */}
      <div >
        {/* Top bar */}
        <div className="bg-white border-b border-slate-200 px-4 py-4 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-600 hover:text-slate-900">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4">
              <Link href="/writer/kalams" className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h2 className="text-xl font-semibold text-slate-900">Submit Kalam</h2>
            </div>
          </div>
        </div>

        {/* Form content */}
        <div className="p-4 lg:p-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    placeholder="Enter kalam title"
                  />
                  {errors.title && <p className="text-sm text-red-600 mt-1">{errors.title}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Language *</label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    >
                      <option value="">Select Language</option>
                      <option value="Urdu">Urdu</option>
                      <option value="English">English</option>
                      <option value="Arabic">Arabic</option>
                      <option value="Persian">Persian</option>
                      <option value="Turkish">Turkish</option>
                      <option value="Kashmiri">Kashmiri</option>
                      <option value="Multilingual">Multilingual</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.language && <p className="text-sm text-red-600 mt-1">{errors.language}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Theme *</label>
                    <select
                      name="theme"
                      value={formData.theme}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    >
                      <option value="">Select Theme</option>
                      <option value="Divine Love">Divine Love</option>
                      <option value="Unity">Unity</option>
                      <option value="Spiritual Journey">Spiritual Journey</option>
                      <option value="Repentance">Repentance</option>
                      <option value="Remembrance">Remembrance</option>
                      <option value="Spiritual Awakening">Spiritual Awakening</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.theme && <p className="text-sm text-red-600 mt-1">{errors.theme}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Kalam Text *</label>
                  <textarea
                    name="kalam_text"
                    value={formData.kalam_text}
                    onChange={handleInputChange}
                    rows={8}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    placeholder="Enter your sacred poetry here..."
                  />
                  {errors.kalam_text && <p className="text-sm text-red-600 mt-1">{errors.kalam_text}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    placeholder="Describe the inspiration or meaning..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Sufi Influence</label>
                    <input
                      type="text"
                      name="sufi_influence"
                      value={formData.sufi_influence}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                      placeholder="e.g., Rumi, Bulleh Shah"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-900 mb-2">Musical Preference</label>
                    <select
                      name="musical_preference"
                      value={formData.musical_preference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    >
                      <option value="">Open to Direction</option>
                      <option value="Qawwali">Qawwali</option>
                      <option value="Sacred Chant">Sacred Chant</option>
                      <option value="Spiritual Anthem">Spiritual Anthem</option>
                      <option value="Whisper Kalam">Whisper Kalam</option>
                      <option value="Soft instrumental">Soft instrumental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-2">Writer Comments</label>
                  <textarea
                    name="writer_comments"
                    value={formData.writer_comments}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-emerald-900 outline-none"
                    placeholder="Any additional comments or requests..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 disabled:opacity-50 transition-colors"
                  >
                    {loading ? "Submitting..." : "Submit Kalam"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
