import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Mic, 
  PenTool, 
  FileText, 
  MessageSquare, 
  Settings, 
  Bell, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Shield,
  Crown,
  UserCog,
  Filter,
  Search,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Star,
  Award,
  Play,
  Download,
  Globe,
  Music,
  UserX
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole] = useState(() => {
    return localStorage.getItem('userRole') as 'super_admin' | 'moderator' | 'collaborator' || 'super_admin';
  });
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: "Total Writers",
      value: "89",
      change: "+7 this month",
      trend: "up",
      icon: PenTool,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Total Vocalists",
      value: "43",
      change: "+3 this week",
      trend: "up",
      icon: Mic,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Pending Approvals",
      value: "12",
      change: "5 urgent",
      trend: "neutral",
      icon: Clock,
      color: "text-amber-600 bg-amber-50"
    },
    {
      title: "Active Collaborations",
      value: "156",
      change: "+18 this month",
      trend: "up",
      icon: FileText,
      color: "text-purple-600 bg-purple-50"
    }
  ];

  const pendingWriters = [
    {
      id: 1,
      name: "Zara Mir",
      email: "zara.mir@email.com",
      location: "Srinagar, Kashmir",
      language: "Kashmiri, Urdu",
      submittedDate: "2024-01-20",
      status: "pending_review",
      sampleKalam: "Kashmir's Sacred Valley",
      priority: "high"
    },
    {
      id: 2,
      name: "Hassan Al-Maghribi",
      email: "hassan.maghribi@email.com",
      location: "Fez, Morocco",
      language: "Arabic, French",
      submittedDate: "2024-01-19",
      status: "pending_review",
      sampleKalam: "Desert Mysticism",
      priority: "medium"
    }
  ];

  const pendingVocalists = [
    {
      id: 1,
      name: "Layla Benali",
      email: "layla.benali@email.com",
      location: "Casablanca, Morocco",
      vocalRange: "Alto",
      languages: ["Arabic", "French", "Spanish"],
      submittedDate: "2024-01-18",
      status: "pending_review",
      sampleFile: "sample_layla_benali.mp3",
      priority: "high"
    }
  ];

  const allUsers = [
    {
      id: 1,
      name: "Ahmad Hassan",
      email: "ahmad@email.com",
      location: "Lahore, Pakistan",
      role: "writer",
      status: "approved",
      joinDate: "2023-12-15",
      contributions: "23"
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      email: "fatima@email.com",
      location: "Cairo, Egypt",
      role: "vocalist",
      status: "approved",
      joinDate: "2023-11-20",
      contributions: "15"
    },
    {
      id: 3,
      name: "Admin User",
      email: "admin@sufipulse.com",
      location: "Global",
      role: "super_admin",
      status: "active",
      joinDate: "2023-01-01",
      contributions: "N/A"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "writer_approved",
      message: "Approved writer application: Amina Rahman",
      time: "2 hours ago",
      user: "Admin",
      priority: "normal"
    },
    {
      id: 2,
      type: "collaboration_started",
      message: "New collaboration started: 'Divine Unity' by Ahmad Hassan",
      time: "4 hours ago",
      user: "System",
      priority: "normal"
    },
    {
      id: 3,
      type: "vocalist_pending",
      message: "New vocalist application requires review: Layla Benali",
      time: "6 hours ago",
      user: "System",
      priority: "high"
    }
  ];

  const handleApproveVocalist = (id: number) => {
    console.log('Approving vocalist:', id);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending_review: { color: 'bg-amber-100 text-amber-700', label: 'Pending Review' },
      approved: { color: 'bg-emerald-100 text-emerald-700', label: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-700', label: 'Rejected' },
      under_review: { color: 'bg-blue-100 text-blue-700', label: 'Under Review' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending_review;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { color: 'bg-red-100 text-red-700', label: 'High' },
      medium: { color: 'bg-amber-100 text-amber-700', label: 'Medium' },
      low: { color: 'bg-slate-100 text-slate-700', label: 'Low' }
    };

    const config = priorityConfig[priority as keyof typeof priorityConfig] || priorityConfig.medium;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'super_admin':
        return <Crown className="w-4 h-4 text-yellow-600" />;
      case 'moderator':
        return <Shield className="w-4 h-4 text-blue-600" />;
      case 'collaborator':
        return <UserCog className="w-4 h-4 text-emerald-600" />;
      default:
        return <UserCog className="w-4 h-4 text-slate-600" />;
    }
  };

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      super_admin: { color: 'bg-yellow-100 text-yellow-700', label: 'Super Admin' },
      moderator: { color: 'bg-blue-100 text-blue-700', label: 'Moderator' },
      collaborator: { color: 'bg-emerald-100 text-emerald-700', label: 'Collaborator' }
    };

    const config = roleConfig[role as keyof typeof roleConfig] || roleConfig.collaborator;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'writers', label: 'Manage Writers', icon: PenTool },
    { id: 'vocalists', label: 'Manage Vocalists', icon: Mic },
    { id: 'collaborations', label: 'Collaborations', icon: FileText },
    { id: 'approvals', label: 'Pending Approvals', icon: UserCheck },
    { id: 'communications', label: 'Communications', icon: MessageSquare },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'settings', label: 'Admin Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="/Untitled (250 x 250 px) (1).png" 
                alt="SufiPulse Logo" 
                className="w-20 h-20 rounded-2xl shadow-2xl object-contain bg-white p-3"
              />
              <div className="text-left">
                <h1 className="text-3xl font-bold text-emerald-400">SufiPulse</h1>
                <p className="text-emerald-300">Admin Command Center</p>
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Admin
              <span className="block text-emerald-400">Dashboard</span>
            </h1>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-emerald-500/20 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {getRoleIcon(userRole)}
                <span className="text-emerald-300 font-medium capitalize">{userRole.replace('_', ' ')} Access</span>
              </div>
              <p className="text-xl text-slate-300 leading-relaxed">
                Manage the sacred community, oversee collaborations, and ensure the spiritual integrity 
                of our global platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  {getRoleIcon(userRole)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Admin Panel</h3>
                  <p className="text-sm text-slate-600 capitalize">{userRole.replace('_', ' ')}</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
                          <div className="text-sm text-slate-600 mb-2">{stat.title}</div>
                          <div className="text-xs text-green-600">{stat.change}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Pending Approvals */}
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                    <div className="p-6 border-b border-slate-100">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-slate-800">Pending Approvals</h3>
                        <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                          {pendingWriters.length + pendingVocalists.length} pending
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {pendingWriters.slice(0, 2).map((writer) => (
                          <div key={writer.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <PenTool className="w-4 h-4 text-emerald-600" />
                                <h4 className="font-semibold text-slate-800">{writer.name}</h4>
                                {getPriorityBadge(writer.priority)}
                              </div>
                              <p className="text-sm text-slate-600 mb-1">{writer.location}</p>
                              <p className="text-xs text-slate-500">Kalam: "{writer.sampleKalam}"</p>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                <AlertCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                        {pendingVocalists.map((vocalist) => (
                          <div key={vocalist.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <Mic className="w-4 h-4 text-blue-600" />
                                <h4 className="font-semibold text-slate-800">{vocalist.name}</h4>
                                {getPriorityBadge(vocalist.priority)}
                              </div>
                              <p className="text-sm text-slate-600 mb-1">{vocalist.location}</p>
                              <p className="text-xs text-slate-500">{vocalist.vocalRange} • {vocalist.languages.join(', ')}</p>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                                <AlertCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <button 
                          onClick={() => setActiveTab('approvals')}
                          className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                        >
                          View All Pending Approvals →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                    <div className="p-6 border-b border-slate-100">
                      <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className={`p-4 rounded-lg border ${
                            activity.priority === 'high' ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'
                          }`}>
                            <div className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full mt-2 ${
                                activity.priority === 'high' ? 'bg-red-500' : 'bg-slate-300'
                              }`}></div>
                              <div className="flex-1">
                                <p className="text-slate-800 mb-1">{activity.message}</p>
                                <div className="flex items-center space-x-2 text-xs text-slate-500">
                                  <Clock className="w-3 h-3" />
                                  <span>{activity.time}</span>
                                  <span>•</span>
                                  <span>by {activity.user}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'approvals' && (
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-800">Pending Approvals</h3>
                    <div className="flex items-center space-x-4">
                      <select 
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-3 py-2 border border-slate-200 rounded-lg text-sm"
                      >
                        <option value="all">All Types</option>
                        <option value="writers">Writers Only</option>
                        <option value="vocalists">Vocalists Only</option>
                      </select>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                          type="text"
                          placeholder="Search applications..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Writers Section */}
                    <div>
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                        <PenTool className="w-5 h-5 text-emerald-600 mr-2" />
                        Writer Applications ({pendingWriters.length})
                      </h4>
                      <div className="space-y-4">
                        {pendingWriters.map((writer) => (
                          <div key={writer.id} className="border border-slate-200 rounded-lg p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h4 className="text-lg font-bold text-slate-800">{writer.name}</h4>
                                  {getStatusBadge(writer.status)}
                                  {getPriorityBadge(writer.priority)}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                                  <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{writer.email}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{writer.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{writer.submittedDate}</span>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <span className="text-sm font-medium text-slate-700">Languages: </span>
                                  <span className="text-sm text-slate-600">{writer.language}</span>
                                </div>
                                <div className="mt-1">
                                  <span className="text-sm font-medium text-slate-700">Sample Kalam: </span>
                                  <span className="text-sm text-emerald-600">"{writer.sampleKalam}"</span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex space-x-3">
                              <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Approve Writer
                              </button>
                              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Request Changes
                              </button>
                              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Reject Application
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Vocalists Section */}
                    <div>
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                        <Mic className="w-5 h-5 text-blue-600 mr-2" />
                        Vocalist Applications ({pendingVocalists.length})
                      </h4>
                      <div className="space-y-4">
                        {pendingVocalists.map((vocalist) => (
                          <div key={vocalist.id} className="border border-slate-200 rounded-lg p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h4 className="text-lg font-bold text-slate-800">{vocalist.name}</h4>
                                  {getStatusBadge(vocalist.status)}
                                  {getPriorityBadge(vocalist.priority)}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
                                  <div className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4" />
                                    <span>{vocalist.email}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{vocalist.location}</span>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{vocalist.submittedDate}</span>
                                  </div>
                                </div>
                                <div className="mt-2">
                                  <span className="text-sm font-medium text-slate-700">Vocal Range: </span>
                                  <span className="text-sm text-slate-600">{vocalist.vocalRange}</span>
                                </div>
                                <div className="mt-1">
                                  <span className="text-sm font-medium text-slate-700">Languages: </span>
                                  <span className="text-sm text-slate-600">{vocalist.languages.join(', ')}</span>
                                </div>
                                <div className="mt-1">
                                  <span className="text-sm font-medium text-slate-700">Sample: </span>
                                  <span className="text-sm text-blue-600">{vocalist.sampleFile}</span>
                                  <button className="ml-2 text-blue-600 hover:text-blue-700">
                                    <Play className="w-3 h-3 inline" />
                                  </button>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                                  <MoreVertical className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex space-x-3">
                              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Approve Vocalist
                              </button>
                              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Request Changes
                              </button>
                              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                                Reject Application
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'writers' && (
              <div className="space-y-8">
                {/* Writer Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <PenTool className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">89</div>
                    <div className="text-sm text-slate-600">Total Writers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">12</div>
                    <div className="text-sm text-slate-600">Pending Review</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">67</div>
                    <div className="text-sm text-slate-600">Active Writers</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">450</div>
                    <div className="text-sm text-slate-600">Total Kalam</div>
                  </div>
                </div>

                {/* Pending Writer Approvals */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-800">Pending Writer Applications</h3>
                      <div className="flex items-center space-x-2">
                        <Search className="w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search writers..."
                          className="px-3 py-2 border border-slate-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {pendingWriters.map((writer) => (
                        <div key={writer.id} className="border border-slate-200 rounded-lg p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="text-lg font-bold text-slate-800">{writer.name}</h4>
                                  <p className="text-slate-600">{writer.location}</p>
                                  <p className="text-sm text-slate-500">{writer.email}</p>
                                  <p className="text-xs text-slate-500">Submitted: {writer.submittedDate}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  writer.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                }`}>
                                  {writer.priority} priority
                                </span>
                              </div>
                              
                              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                                <h5 className="font-medium text-slate-800 mb-2">Writing Profile</h5>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-slate-500">Languages:</span>
                                    <span className="ml-2 font-medium">{writer.language}</span>
                                  </div>
                                  <div>
                                    <span className="text-slate-500">Sample Kalam:</span>
                                    <span className="ml-2 font-medium text-emerald-600">"{writer.sampleKalam}"</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="bg-emerald-50 rounded-lg p-4">
                                <h5 className="font-medium text-emerald-800 mb-2">Quick Actions</h5>
                                <div className="space-y-2">
                                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                                    <CheckCircle className="w-4 h-4 inline mr-2" />
                                    Approve Writer
                                  </button>
                                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                                    <UserX className="w-4 h-4 inline mr-2" />
                                    Reject Application
                                  </button>
                                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                                    <MessageSquare className="w-4 h-4 inline mr-2" />
                                    Send Message
                                  </button>
                                </div>
                              </div>
                              
                              <div className="bg-slate-50 rounded-lg p-4">
                                <h5 className="font-medium text-slate-800 mb-2">Review Notes</h5>
                                <textarea 
                                  placeholder="Add review notes..."
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                                  rows={3}
                                />
                                <button className="mt-2 w-full bg-slate-600 hover:bg-slate-700 text-white py-1 px-3 rounded-lg text-xs font-medium transition-colors">
                                  Save Notes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Writers Management */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="p-6 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800">Active Writers</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {allUsers.filter(user => user.role === 'writer').map((writer) => (
                        <div key={writer.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h4 className="font-semibold text-slate-800">{writer.name}</h4>
                              <p className="text-sm text-slate-600">{writer.location}</p>
                              <p className="text-xs text-slate-500">Joined: {writer.joinDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-600">{writer.contributions}</div>
                              <div className="text-xs text-slate-500">Kalam</div>
                            </div>
                            {getStatusBadge(writer.status)}
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <MessageSquare className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vocalists' && (
              <div className="space-y-8">
                {/* Vocalist Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Mic className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">43</div>
                    <div className="text-sm text-slate-600">Total Vocalists</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Clock className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">8</div>
                    <div className="text-sm text-slate-600">Pending Review</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Users className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">31</div>
                    <div className="text-sm text-slate-600">Available Now</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 text-center">
                    <Music className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">200</div>
                    <div className="text-sm text-slate-600">Collaborations</div>
                  </div>
                </div>

                {/* Pending Vocalist Approvals */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-800">Pending Vocalist Applications</h3>
                      <div className="flex items-center space-x-2">
                        <Search className="w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search vocalists..."
                          className="px-3 py-2 border border-slate-200 rounded-lg text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {pendingVocalists.map((vocalist) => (
                        <div key={vocalist.id} className="border border-slate-200 rounded-lg p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h4 className="text-lg font-bold text-slate-800">{vocalist.name}</h4>
                                  <p className="text-slate-600">{vocalist.location}</p>
                                  <p className="text-sm text-slate-500">{vocalist.email}</p>
                                  <p className="text-xs text-slate-500">Submitted: {vocalist.submittedDate}</p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  vocalist.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                                }`}>
                                  {vocalist.priority} priority
                                </span>
                              </div>
                              
                              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                                <h5 className="font-medium text-slate-800 mb-2">Vocal Profile</h5>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="text-slate-500">Range:</span>
                                    <span className="ml-2 font-medium">{vocalist.vocalRange}</span>
                                  </div>
                                  <div>
                                    <span className="text-slate-500">Languages:</span>
                                    <span className="ml-2 font-medium">{vocalist.languages.join(', ')}</span>
                                  </div>
                                </div>
                                <div className="mt-3">
                                  <p className="text-xs text-slate-500 mb-2">Audio Sample:</p>
                                  <div className="flex items-center space-x-2 bg-emerald-50 p-2 rounded">
                                    <Play className="w-4 h-4 text-emerald-600" />
                                    <span className="text-sm text-emerald-700">sample_vocal.mp3</span>
                                    <button className="ml-auto text-emerald-600 hover:text-emerald-700">
                                      <Download className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-medium text-purple-800 mb-2">Quick Actions</h5>
                                <div className="space-y-2">
                                  <button 
                                    onClick={() => handleApproveVocalist(vocalist.id)}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                                  >
                                    <CheckCircle className="w-4 h-4 inline mr-2" />
                                    Approve Vocalist
                                  </button>
                                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                                    <UserX className="w-4 h-4 inline mr-2" />
                                    Reject Application
                                  </button>
                                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                                    <MessageSquare className="w-4 h-4 inline mr-2" />
                                    Send Message
                                  </button>
                                </div>
                              </div>
                              
                              <div className="bg-slate-50 rounded-lg p-4">
                                <h5 className="font-medium text-slate-800 mb-2">Review Notes</h5>
                                <textarea 
                                  placeholder="Add review notes..."
                                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                                  rows={3}
                                />
                                <button className="mt-2 w-full bg-slate-600 hover:bg-slate-700 text-white py-1 px-3 rounded-lg text-xs font-medium transition-colors">
                                  Save Notes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active Vocalists Management */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
                  <div className="p-6 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800">Active Vocalists</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {allUsers.filter(user => user.role === 'vocalist').map((vocalist) => (
                        <div key={vocalist.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h4 className="font-semibold text-slate-800">{vocalist.name}</h4>
                              <p className="text-sm text-slate-600">{vocalist.location}</p>
                              <p className="text-xs text-slate-500">Joined: {vocalist.joinDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">{vocalist.contributions}</div>
                              <div className="text-xs text-slate-500">Recordings</div>
                            </div>
                            <div className="w-3 h-3 bg-green-500 rounded-full" title="Available"></div>
                            {getStatusBadge(vocalist.status)}
                            <div className="flex space-x-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <MessageSquare className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-8">
                {/* Platform Settings */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Platform Settings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Platform Name</label>
                        <input
                          type="text"
                          defaultValue="SufiPulse"
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                        <input
                          type="email"
                          defaultValue="connect@sufipulse.com"
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Auto-Approval Settings</label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                            <span className="text-sm text-slate-700">Auto-approve writers with 5+ published works</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                            <span className="text-sm text-slate-700">Auto-approve vocalists with portfolio</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Notification Settings</label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                            <span className="text-sm text-slate-700">Email notifications for new submissions</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" defaultChecked className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                            <span className="text-sm text-slate-700">Daily admin digest</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                            <span className="text-sm text-slate-700">Weekly analytics report</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Content Moderation</label>
                        <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none">
                          <option>Manual review required</option>
                          <option>Auto-approve trusted users</option>
                          <option>AI-assisted moderation</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end space-x-4">
                    <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                      Reset to Defaults
                    </button>
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                      Save Settings
                    </button>
                  </div>
                </div>

                {/* Admin Team Management */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Admin Team Management</h3>
                  <div className="space-y-4">
                    {allUsers.filter(user => ['super_admin', 'moderator', 'collaborator'].includes(user.role)).map((admin) => (
                      <div key={admin.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                            <Crown className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-800">{admin.name}</h4>
                            <p className="text-sm text-slate-600">{admin.email}</p>
                            <p className="text-xs text-slate-500">Admin since: {admin.joinDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {getRoleBadge(admin.role)}
                          <div className="flex space-x-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <UserX className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Information */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">System Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">Platform Version</h4>
                      <p className="text-2xl font-bold text-emerald-600">v2.1.0</p>
                      <p className="text-xs text-slate-500">Last updated: Jan 2025</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">Database Status</h4>
                      <p className="text-2xl font-bold text-green-600">Healthy</p>
                      <p className="text-xs text-slate-500">99.9% uptime</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">Storage Used</h4>
                      <p className="text-2xl font-bold text-blue-600">2.3 GB</p>
                      <p className="text-xs text-slate-500">of 10 GB available</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'communications' && (
              <div className="space-y-8">
                {/* Communication Templates */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-slate-800">Message Templates</h3>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                      Create Template
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-800 mb-2">Welcome Writer</h4>
                      <p className="text-sm text-slate-600 mb-3">Welcome new writers to the platform</p>
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Use Template</button>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-800 mb-2">Approval Notification</h4>
                      <p className="text-sm text-slate-600 mb-3">Notify users of application approval</p>
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Use Template</button>
                    </div>
                    <div className="border border-slate-200 rounded-lg p-4">
                      <h4 className="font-bold text-slate-800 mb-2">Project Update</h4>
                      <p className="text-sm text-slate-600 mb-3">Update users on project progress</p>
                      <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium">Use Template</button>
                    </div>
                  </div>
                </div>
                
                {/* Quick Actions */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Communications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Send to</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg">
                        <option>All Users</option>
                        <option>Writers Only</option>
                        <option>Vocalists Only</option>
                        <option>Pending Approvals</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message Type</label>
                      <select className="w-full px-4 py-3 border border-slate-200 rounded-lg">
                        <option>Announcement</option>
                        <option>Update</option>
                        <option>Welcome</option>
                        <option>Reminder</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg"
                      rows={6}
                    />
                  </div>
                  <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                      Save Draft
                    </button>
                    <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            )}

            {(activeTab !== 'overview' && activeTab !== 'approvals' && activeTab !== 'writers' && activeTab !== 'vocalists' && activeTab !== 'communications' && activeTab !== 'settings') && (
              <div className="space-y-8">
                {/* Analytics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-emerald-600" />
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">127K</div>
                    <div className="text-sm text-slate-600">Total Views</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+8%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">300+</div>
                    <div className="text-sm text-slate-600">Total Submissions</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+15%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">132</div>
                    <div className="text-sm text-slate-600">Active Users</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">+5%</span>
                    </div>
                    <div className="text-2xl font-bold text-slate-800 mb-1">50+</div>
                    <div className="text-sm text-slate-600">Countries</div>
                  </div>
                </div>
                
                {/* Charts and Analytics */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Monthly Growth</h3>
                    <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
                      <p className="text-slate-600">Growth Chart Visualization</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Top Countries</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">Pakistan</span>
                        <span className="text-emerald-600 font-medium">28%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">United States</span>
                        <span className="text-emerald-600 font-medium">22%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-700">United Kingdom</span>
                        <span className="text-emerald-600 font-medium">15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;