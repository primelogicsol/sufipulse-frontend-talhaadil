"use client"

import { useState } from "react"
import { createBlog } from "@/services/user"

// Define the blog data interface
interface BlogData {
  title: string
  role: string
  city: string
  country: string
  category: string
  excerpt: string
  content: string
  tags: string[]
}

// Sidebar component for vocalist dashboard
const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-900 text-white hidden lg:block">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-emerald-50">Vocalist Dashboard</h2>
        <nav className="mt-8 space-y-4">
          <a href="/dashboard" className="block text-slate-50 hover:text-emerald-50 transition duration-200">Dashboard</a>
          <a href="/guest-blogs" className="block text-slate-50 hover:text-emerald-50 transition duration-200">Guest Blogs</a>
          <a href="/create-blog" className="block text-emerald-50 font-medium">Create Blog</a>
          <a href="/profile" className="block text-slate-50 hover:text-emerald-50 transition duration-200">Profile</a>
          <a href="/recordings" className="block text-slate-50 hover:text-emerald-50 transition duration-200">Recordings</a>
        </nav>
      </div>
    </aside>
  )
}

export default function CreateBlogPage() {
  const [formData, setFormData] = useState<BlogData>({
    title: "",
    role: "",
    city: "",
    country: "",
    category: "",
    excerpt: "",
    content: "",
    tags: [],
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (name === "tags") {
      setFormData((prev) => ({
        ...prev,
        tags: value.split(",").map((tag) => tag.trim()).filter((tag) => tag),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)
    setLoading(true)

    try {
      const currentDate = new Date().toISOString(); // e.g. "2025-09-14T11:45:30.123Z"

      const dataWithDate = {
        ...formData,
        date: currentDate, // 👈 add current date here
      };

      const response = await createBlog(dataWithDate);
      if (response.status === 200) {
        setSuccess("Blog created successfully!")
        window.location.href = '/vocalist/blog'
        setFormData({
          title: "",
          role: "",
          city: "",
          country: "",
          category: "",
          excerpt: "",
          content: "",
          tags: [],
        })
      }
    } catch (err) {
      setError("Failed to create blog. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-22 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Create a New Blog</h1>
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sm:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-center">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-900 text-center">
              {success}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-600 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-600 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="e.g., Vocalist, Writer"
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-600 mb-1">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 transition duration-200"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Sufi Poetry">Sufi Poetry</option>
                  <option value="Spirituality">Spirituality</option>
                  <option value="Culture">Culture</option>
                  <option value="Music">Music</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-slate-600 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-slate-600 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter country"
                  className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
                />
              </div>
            </div>


            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-slate-600 mb-1"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={(e) => {
                  const words = e.target.value.trim().split(/\s+/)
                  if (words.length <= 100) {
                    handleChange(e)
                  }
                }}
                placeholder="Enter blog content (max 100 words)"
                className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
                rows={4}
                required
              />

              <p className="text-sm text-slate-500 mt-1">
                {formData.content.trim() === ""
                  ? "0"
                  : formData.content.trim().split(/\s+/).length}{" "}
                / 50 words
              </p>
            </div>

            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-slate-600 mb-1">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags.join(",")}
                onChange={handleChange}
                placeholder="e.g., Sufi, Poetry, Spirituality"
                className="w-full px-4 py-2 rounded-md border border-slate-300 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 placeholder-slate-400 transition duration-200"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 bg-emerald-900 text-white rounded-md hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-900 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 animate-spin mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 1116 0 8 8 0 01-16 0z" />
                    </svg>
                    Creating...
                  </span>
                ) : (
                  "Create Blog"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}