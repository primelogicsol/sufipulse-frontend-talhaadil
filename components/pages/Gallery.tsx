"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Play,
  Filter,
  Search,
  Globe,
  Clock,
  Heart,
  Eye,
  Download,
  Share2,
  Star,
  Music,
  Headphones,
  Users,
} from "lucide-react"
import { incrementDaily, incrementMonthly, incrementWeekly } from "@/lib/increment"

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const CHANNEL_ID = "UCraDr3i5A3k0j7typ6tOOsQ"

interface YouTubeVideo {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    thumbnails: {
      medium: {
        url: string
      }
    }
    publishedAt: string
    channelTitle: string
  }
}

interface ProcessedVideo {
  id: string
  title: string
  writer: string
  vocalist: string
  thumbnail: string
  duration: string
  views: string
  category: string
  language: string
  uploadDate: string
  videoId: string
  description: string
}

async function fetchFromYouTube(url: string, cacheTime?: number) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24, // Revalidate every 24 hours by default
    }
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`YouTube API error: ${response.statusText}`);
  }
  return await response.json();
}

const parseDuration = (duration: string): number => {
  const parts = duration.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
};

const parseViews = (views: string): number => {
  const num = parseFloat(views.replace(/[KMB]/g, ''));
  const multiplier = views.toUpperCase().includes('K') ? 1000 : views.toUpperCase().includes('M') ? 1000000 : 1;
  return num * multiplier;
};

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState<ProcessedVideo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const filters = [
    { id: "all", label: "All Videos", count: 0 },
    { id: "popular", label: "Popular", count: 0 },
    { id: "old", label: "Old", count: 0 },
    { id: "new", label: "New", count: 0 },
  ]

  const categorizeVideo = (description: string): string => {
    const descLower = description.toLowerCase()
    if (descLower.includes("popular")) return "popular"
    if (descLower.includes("old")) return "old"
    if (descLower.includes("new")) return "new"
    return "all"
  }

  const fetchYouTubeVideos = async () => {
    try {
      setLoading(true)

      // Call your FastAPI backend instead of YouTube API
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/youtube/videos`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error(`Error fetching videos: ${res.statusText}`)
      }

      const data = await res.json()

      if (data) {
        const processedVideos: ProcessedVideo[] = data.map((video: any) => ({
          id: video.id,
          title: video.title,
          writer: video.writer,
          vocalist: video.vocalist,
          thumbnail: video.thumbnail,
          duration: video.duration,
          views: video.views,
          category: categorizeVideo(video.description || ""),
          language: "Multilingual",
          uploadDate: video.uploaded_at,
          videoId: video.id,
          description: video.description || "",
        }))

        console.log("Fetched videos from backend:", processedVideos)

        setVideos(processedVideos)

        filters.forEach((filter) => {
          filter.count = processedVideos.length
        })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      console.error("Error fetching backend videos:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchYouTubeVideos()
  }, [])

  const stats = [
    { number: videos.length.toString(), label: "Sacred Videos", icon: Play },
    { number: `${incrementMonthly(17,50)}+`, label: "Languages", icon: Globe },
    {
      number: videos.reduce((total, video) => total + Number.parseInt(video.views.replace(/[KM]/g, "")), 0) + "K+",
      label: "Total Views",
      icon: Eye,
    },
    { number: `${incrementMonthly(43,200)}+`, label: "Countries Reached", icon: Heart },
  ]

  const searchedVideos = videos.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.writer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.vocalist.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  let filteredVideos = [...searchedVideos];

  if (activeFilter === 'all') {
    filteredVideos.sort((a, b) => parseDuration(b.duration) - parseDuration(a.duration));
  } else if (activeFilter === 'popular') {
    filteredVideos.sort((a, b) => parseViews(b.views) - parseViews(a.views));
  } else if (activeFilter === 'old') {
    filteredVideos.sort((a, b) => new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime());
  } else if (activeFilter === 'new') {
    filteredVideos.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
  }

  const handleVideoClick = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading sacred videos...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading videos: {error}</p>
          <button
            onClick={fetchYouTubeVideos}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Sacred Video
                  <span className="block text-emerald-400">Gallery</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                  Experience divine kalam brought to life through global spiritual voices. From traditional Qawwali to
                  contemporary spiritual anthems.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20">
                <p className="text-emerald-300 font-medium mb-2">Sacred Collection</p>
                <blockquote className="text-lg italic">
                  "Every video is a bridge between hearts and the Divine"
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?type=writer"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  <Music className="w-5 h-5" />
                  <span>Submit Your Kalam</span>
                </Link>
                <Link
                  href="/writers"
                  className="inline-flex items-center justify-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  <Users className="w-5 h-5" />
                  <span>Meet Writers</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sacred Video Gallery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-emerald-600/90 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Divine Collaborations</h3>
                  <p className="text-slate-200 text-sm">{videos.length} sacred videos from our global community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-slate-100">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search sacred videos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <Filter className="w-5 h-5 text-slate-500 flex-shrink-0" />
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all duration-200 ${activeFilter === filter.id
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                      }`}
                  >
                    <span>{filter.label}</span>
                    
                  </button>
                ))}
              </div>
            </div>

            <div className="text-sm text-slate-600">
              Showing {filteredVideos.length} of {videos.length} videos
            </div>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100 cursor-pointer"
                onClick={() => handleVideoClick(video.videoId)}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="text-xs font-medium text-white bg-emerald-600 px-2 py-1 rounded-lg capitalize">
                      {video.category}
                    </span>
                    <div className="flex items-center space-x-1 text-white text-xs bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <Clock className="w-3 h-3" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-emerald-600/90 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-emerald-600 font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between text-slate-600 text-sm mb-4">
                    <span>by {video.writer}</span>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-3 text-amber-950" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-slate-600 mb-4">
                    <div>
                      <span className="font-medium">Uploaded:</span>{" "}
                      {new Date(video.uploadDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full capitalize">
                      {video.category}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigator.share?.({
                            title: video.title,
                            url: `https://www.youtube.com/watch?v=${video.videoId}`,
                          })
                        }}
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")
                        }}
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={fetchYouTubeVideos}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200"
            >
              Refresh Videos
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Share Your Sacred Voice</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Join our global community and experience the complete journey from sacred words to worldwide spiritual
            impact through professional video production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?type=writer"
              className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Music className="w-5 h-5" />
              <span>Submit Your Kalam</span>
            </Link>
            <Link
              href="/contact?type=vocalist"
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Headphones className="w-5 h-5" />
              <span>Join</span>
            </Link>
            <Link
              href="/studio"
              className="inline-flex items-center space-x-2 border-2 border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Star className="w-5 h-5" />
              <span>Visit Studio</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery