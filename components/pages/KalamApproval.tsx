"use client";
import { useState, useEffect } from "react";
import { Music, CheckCircle, XCircle, Building2, Wifi } from "lucide-react";
import { approveOrRejectKalam, getKalamsByVocalist } from "@/services/vocalist";
import {
  createStudioVisitRequest,
  createRemoteRecordingRequest,
  getStudioVisitRequestsByVocalist,
  getRemoteRecordingRequestsByVocalist,
  checkRequestExists
} from "@/services/requests";
import Cookies from "js-cookie";
// Import the checkRequestExists API
import StudioVisit from "./StudioVisit";
import RemoteRecording from "./RemoteRecording";

interface Kalam {
  id: number;
  title: string;
  language: string;
  theme: string;
  kalam_text: string;
  description: string;
  sufi_influence: string;
  musical_preference: string;
  youtube_link: string;
  writer_id: number;
  vocalist_id: number;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  vocalist_approval_status: string;
}

const KalamApproval = () => {
  const [kalams, setKalams] = useState<Kalam[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [selectedKalam, setSelectedKalam] = useState<number | null>(null);
  const [showRecordingOptions, setShowRecordingOptions] = useState<number | null>(null);
  const [studioRequests, setStudioRequests] = useState<any[]>([]);
  const [remoteRequests, setRemoteRequests] = useState<any[]>([]);
  const [currentView, setCurrentView] = useState<"kalams" | "studio-requests" | "remote-requests">("kalams");
  const [modalOpen, setModalOpen] = useState<"studio" | "remote" | null>(null);
  const [modalKalamId, setModalKalamId] = useState<number | null>(null);
  const [requestExistsMap, setRequestExistsMap] = useState<{ [key: number]: boolean }>({}); // Track request existence per kalam
  const userId = Cookies.get("user_id");
  useEffect(() => {
    fetchKalams();
  }, []);

  const fetchKalams = async () => {
    try {
      setLoading(true);
      const response = await getKalamsByVocalist();
      console.log("✅ Kalams API Response:", response.data);
      const kalamsData = response.data.kalams || [];
      setKalams(kalamsData);

      // Check request existence for each kalam
      const requestStatusMap: { [key: number]: boolean } = {};
      for (const kalam of kalamsData) {
        const requestResponse = await checkRequestExists(userId ?? "", kalam.id.toString()); 
        // Replace "1" with actual vocalist_id
        requestStatusMap[kalam.id] = requestResponse.data.is_booked; 
      }
      setRequestExistsMap(requestStatusMap);
    } catch (error: any) {
      console.error("❌ Kalams API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleApproveReject = async (kalamId: number, action: "approved" | "rejected") => {
    const input = { status: action, comments: "hello hi" };
    try {
      setActionLoading(kalamId);
      const response = await approveOrRejectKalam(kalamId, input);
      console.log("✅ Approval API Response:", response.data);

      if (action === "approved") {
        // Check if a request exists for this kalam
        const requestResponse = await checkRequestExists("1", kalamId.toString()); // Replace "1" with actual vocalist_id
        setRequestExistsMap((prev) => ({
          ...prev,
          [kalamId]: requestResponse.data.exists,
        }));
        if (!requestResponse.data.exists) {
          setShowRecordingOptions(kalamId); // Show recording options only if no request exists
        }
      }

      await fetchKalams();
    } catch (error: any) {
      console.error("❌ Approval API Error:", error);
    } finally {
      setActionLoading(null);
    }
  };

  const handleRecordingRequest = (type: "studio" | "remote", kalamId: number) => {
    setModalKalamId(kalamId);
    setModalOpen(type);
    setShowRecordingOptions(null);
  };

  const handleStudioFormSubmit = async (formData: any) => {
    if (!modalKalamId) return;
    try {
      if (!userId) {
        throw new Error("User ID is missing");
      }
      const requestData = {
        vocalist_id: Number(userId), // Ensure vocalist_id is a number
        kalam_id: modalKalamId,
        name: formData.fullName,
        email: formData.email,
        organization: formData.organization,
        contact_number: formData.contactNumber,
        preferred_date: formData.visitDate,
        preferred_time: formData.preferredTime,
        purpose: formData.visitPurpose,
        number_of_visitors: Number(formData.numberOfVisitors),
        additional_details: formData.additionalDetails,
        special_requests: formData.specialRequests,
      };
      
      const response = await createStudioVisitRequest(requestData);
      console.log("✅ Studio Request API Response:", response.data);
      setModalOpen(null);
      setCurrentView("studio-requests");
      setRequestExistsMap((prev) => ({ ...prev, [modalKalamId]: true })); // Update request status
      await fetchStudioRequests();
    } catch (error: any) {
      console.error("❌ Studio Request API Error:", error);
    }
  };

  const handleRemoteFormSubmit = async (formData: any) => {
    if (!modalKalamId) return;
    try {
      const requestData = {
        vocalist_id: Number(userId), // Replace with actual vocalist ID
        kalam_id: modalKalamId,
        name: formData.fullName,
        email: formData.email,
        city: formData.location,
        country: formData.country,
        time_zone: formData.timezone,
        role: formData.role,
        project_type: formData.projectType,
        recording_equipment: formData.equipment,
        internet_speed: formData.internetSpeed,
        preferred_software: formData.preferredSoftware,
        availability: formData.availability,
        recording_experience: formData.experience,
        technical_setup: formData.technicalSetup,
        additional_details: formData.additionalDetails,
      };

      const response = await createRemoteRecordingRequest(requestData);
      console.log("✅ Remote Request API Response:", response.data);
      setModalOpen(null);
      setCurrentView("remote-requests");
      setRequestExistsMap((prev) => ({ ...prev, [modalKalamId]: true })); // Update request status
      await fetchRemoteRequests();
    } catch (error: any) {
      console.error("❌ Remote Request API Error:", error);
    }
  };

  const fetchStudioRequests = async () => {
    try {
      const response = await getStudioVisitRequestsByVocalist();
      console.log("✅ Studio Requests API Response:", response.data);
      setStudioRequests(response.data || []);
    } catch (error: any) {
      console.error("❌ Studio Requests API Error:", error);
    }
  };

  const fetchRemoteRequests = async () => {
    try {
      const response = await getRemoteRecordingRequestsByVocalist();
      console.log("✅ Remote Requests API Response:", response.data);
      setRemoteRequests(response.data || []);
    } catch (error: any) {
      console.error("❌ Remote Requests API Error:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading kalams...</p>
        </div>
      </div>
    );
  }

  const renderKalams = () => (
    <div className="space-y-6">
      {kalams.map((kalam) => (
        <div key={kalam.id} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{kalam.title}</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                  {kalam.language}
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  {kalam.theme}
                </span>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                kalam.vocalist_approval_status === "approved"
                  ? "bg-emerald-100 text-emerald-800"
                  : kalam.vocalist_approval_status === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {kalam.vocalist_approval_status}
            </div>
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">{kalam.description}</p>

          {kalam.kalam_text && (
            <div className="mb-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-800 italic leading-relaxed">{kalam.kalam_text}</p>
            </div>
          )}

          {kalam.vocalist_approval_status === "pending" && (
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => handleApproveReject(kalam.id, "approved")}
                disabled={actionLoading === kalam.id}
                className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 transition-colors"
              >
                {actionLoading === kalam.id ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <CheckCircle className="w-4 h-4" />
                )}
                <span>Accept</span>
              </button>
              <button
                onClick={() => handleApproveReject(kalam.id, "rejected")}
                disabled={actionLoading === kalam.id}
                className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                <XCircle className="w-4 h-4" />
                <span>Reject</span>
              </button>
            </div>
          )}

          {(kalam.vocalist_approval_status === "approved" && !requestExistsMap[kalam.id]) || showRecordingOptions === kalam.id ? (
            <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h4 className="font-medium text-emerald-800 mb-3">Choose Recording Option:</h4>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleRecordingRequest("studio", kalam.id)}
                  className="flex items-center space-x-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Studio Visit Request</span>
                </button>
                <button
                  onClick={() => handleRecordingRequest("remote", kalam.id)}
                  className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  <Wifi className="w-4 h-4" />
                  <span>Remote Recording Request</span>
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );

  const renderRequests = (requests: any[], type: "studio" | "remote") => (
    <div className="space-y-4">
      {requests.length > 0 ? (
        requests.map((request, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {type === "studio" ? (
                  <Building2 className="w-6 h-6 text-slate-600" />
                ) : (
                  <Wifi className="w-6 h-6 text-emerald-600" />
                )}
                <h3 className="text-lg font-bold text-slate-900">
                  {type === "studio" ? "Studio Visit" : "Remote Recording"} Request
                </h3>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                {request.status || "Pending"}
              </span>
            </div>
            <div className="text-slate-600">
              <p>
                <strong>Request ID:</strong> {request.id}
              </p>
              <p>
                <strong>Created:</strong> {new Date(request.created_at).toLocaleDateString()}
              </p>
              {request.message && (
                <p>
                  <strong>Message:</strong> {request.message}
                </p>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12">
          {type === "studio" ? (
            <Building2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          ) : (
            <Wifi className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          )}
          <p className="text-slate-500 text-lg">No {type} requests found</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 mb-6">
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView("kalams")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === "kalams"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Kalams
            </button>
            <button
              onClick={() => {
                setCurrentView("studio-requests");
                fetchStudioRequests();
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === "studio-requests"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Studio Requests
            </button>
            <button
              onClick={() => {
                setCurrentView("remote-requests");
                fetchRemoteRequests();
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentView === "remote-requests"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Remote Requests
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
          <div className="flex items-center space-x-3 mb-6">
            {currentView === "kalams" && <Music className="w-6 h-6 text-emerald-600" />}
            {currentView === "studio-requests" && <Building2 className="w-6 h-6 text-slate-600" />}
            {currentView === "remote-requests" && <Wifi className="w-6 h-6 text-emerald-600" />}
            <h2 className="text-2xl font-bold text-slate-900">
              {currentView === "kalams" && "Kalam Approvals"}
              {currentView === "studio-requests" && "Studio Visit Requests"}
              {currentView === "remote-requests" && "Remote Recording Requests"}
            </h2>
          </div>

          {currentView === "kalams" && renderKalams()}
          {currentView === "studio-requests" && renderRequests(studioRequests, "studio")}
          {currentView === "remote-requests" && renderRequests(remoteRequests, "remote")}
        </div>

        {/* Modal for StudioVisit and RemoteRecording */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-slate-900">
                  {modalOpen === "studio" ? "Studio Visit Request" : "Remote Recording Request"}
                </h2>
                <button
                  onClick={() => setModalOpen(null)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              {modalOpen === "studio" && (
                <StudioVisit onSubmit={handleStudioFormSubmit} />
              )}
              {modalOpen === "remote" && (
                <RemoteRecording onSubmit={handleRemoteFormSubmit} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KalamApproval;